'use client';

import { useEffect, useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Video {
    id: string;
    title: string;
    description: string;
    videoId: string;
}

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

export default function News() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlaylistVideos = async () => {
            const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
            const playlistId = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;

            if (!apiKey || !playlistId) {
                setError('Configuración de YouTube no encontrada');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`,
                );

                if (!response.ok) {
                    throw new Error('Error al obtener videos de YouTube');
                }

                const data = await response.json();

                const fetchedVideos: Video[] = data.items.map((item: YouTubePlaylistItem) => ({
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    videoId: item.snippet.resourceId.videoId,
                }));

                setVideos(fetchedVideos);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylistVideos();
    }, []);

    const displayNews = videos.length === 3 ? [...videos, ...videos] : videos;

    return (
        <section className="container min-w-full bg-card flex flex-col justify-between items-center px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-secondary pb-8">NOVEDADES</h2>

            {loading && <p className="text-muted-foreground">Cargando videos...</p>}

            {error && <p className="text-destructive">Error: {error}</p>}

            {!loading && !error && videos.length > 0 && (
                <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-7xl mx-auto">
                    <CarouselContent className="py-3 -ml-1">
                        {displayNews.map((item, index) => (
                            <CarouselItem key={`${item.id}-${index}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="overflow-hidden h-full pt-0! text-start">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${item.videoId}`}
                                        title={item.title}
                                        className="w-full aspect-video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </section>
    );
}
