'use client';

import { useEffect, useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { Button } from './ui/button';

interface Video {
    id: string;
    title: string;
    description: string;
    videoId: string;
}

// Carrusel de videos desde YouTube con navegación dinámica
export default function News() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    // Obtiene videos del API endpoint de YouTube
    useEffect(() => {
        const fetchPlaylistVideos = async () => {
            try {
                const response = await fetch('/api/youtube');

                if (!response.ok) {
                    throw new Error('Error al obtener videos de YouTube');
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setVideos(data.videos);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylistVideos();
    }, []);

    // Sincroniza el estado del carrusel con los indicadores visuales
    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const showNavigation = videos.length > 3;

    return (
        <section className="container min-w-full bg-card flex flex-col justify-between items-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary pb-4 sm:pb-6 lg:pb-8">NOVEDADES</h2>

            {loading && <p className="text-xs sm:text-sm text-muted-foreground">Cargando videos...</p>}

            {error && <p className="text-xs sm:text-sm text-destructive">Error: {error}</p>}

            {!loading && !error && videos.length > 0 && (
                <>
                    <Carousel setApi={setApi} opts={{ align: 'start', loop: showNavigation }} className="w-full max-w-7xl mx-auto">
                        <CarouselContent className="py-2 sm:py-3 -ml-2 sm:-ml-1">
                            {videos.map((item, index) => (
                                <CarouselItem key={`${item.id}-${index}`} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <Card className="overflow-hidden h-full pt-0! text-start">
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
                                            title={item.title}
                                            className="w-full aspect-video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            tabIndex={-1}
                                        />
                                        <CardHeader className="pb-3 lg:pb-0 px-4 lg:px-6">
                                            <CardTitle className="text-base sm:text-lg line-clamp-1">{item.title}</CardTitle>
                                            <CardDescription className="text-xs sm:text-sm line-clamp-2">{item.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {showNavigation && (
                            <>
                                <CarouselPrevious className="hidden sm:flex" />
                                <CarouselNext className="hidden sm:flex" />
                            </>
                        )}
                    </Carousel>
                    <div className="flex gap-1.5 mt-4 sm:hidden">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                                aria-label={`Ir a slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="mt-5"
                        onClick={() => window.open('https://youtube.com/@gruposantafesistemas', '_blank')}
                    >
                        Ver más
                    </Button>
                </>
            )}
        </section>
    );
}
