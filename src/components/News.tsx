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
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-secondary text-center mb-12 md:text-4xl lg:text-5xl">NOVEDADES</h2>
                <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-7xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {news.map((item, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="overflow-hidden h-full">
                                    <Image src={item.video} alt={item.title} width={400} height={300} className="w-full object-cover aspect-video" />
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </section>
    );
}
