import { NextResponse } from 'next/server';

interface YouTubePlaylistItem {
    id: string;
    snippet: {
        title: string;
        description: string;
        resourceId: {
            videoId: string;
        };
    };
}

export async function GET() {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const playlistId = process.env.YOUTUBE_PLAYLIST_ID;

    console.log('API Key status:', apiKey ? `Loaded (${apiKey.substring(0, 10)}...)` : 'NOT FOUND');
    console.log('Playlist ID:', playlistId || 'NOT FOUND');

    // Validar que existan las variables de entorno
    if (!apiKey || !playlistId) {
        return NextResponse.json(
            {
                error: 'Configuración de YouTube no encontrada',
                details: {
                    hasApiKey: !!apiKey,
                    hasPlaylistId: !!playlistId,
                },
            },
            { status: 500 },
        );
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`,
            {
                headers: {
                    Referer: 'http://localhost:3000',
                },
                // Cachear la respuesta por 1 hora (3600 segundos)
                next: { revalidate: 3600 },
            },
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('YouTube API error:', response.status, errorData);
            return NextResponse.json(
                {
                    error: 'Error al obtener videos de YouTube',
                    status: response.status,
                    details: errorData,
                },
                { status: response.status },
            );
        }

        const data = await response.json();

        // Transformar los datos para enviar solo lo necesario
        const videos = data.items.map((item: YouTubePlaylistItem) => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            videoId: item.snippet.resourceId.videoId,
        }));

        return NextResponse.json({ videos });
    } catch (error) {
        console.error('Error fetching YouTube playlist:', error);
        return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
    }
}
