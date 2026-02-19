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
                next: { revalidate: 3600 },
            },
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
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
