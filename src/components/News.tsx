'use client';

import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function News() {
    const news = [
        {
            title: 'Novedad 1',
            description: 'Descripción de la novedad 1',
            video: '/images/hero-bg.webp',
        },
        {
            title: 'Novedad 2',
            description: 'Descripción de la novedad 2',
            video: '/images/hero-bg.webp',
        },
        {
            title: 'Novedad 3',
            description: 'Descripción de la novedad 3',
            video: '/images/hero-bg.webp',
        },
    ];

    const displayNews = news.length == 3 ? [...news, ...news] : news;

    return (
        <section className="container flex flex-col justify-between items-center mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-secondary pb-8">NOVEDADES</h2>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-7xl mx-auto">
                <CarouselContent className="-ml-4">
                    {displayNews.map((item, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden h-full pt-0 text-start">
                                <Image src={item.video} alt={item.title} width={400} height={300} className="w-full object-cover aspect-video" />
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
