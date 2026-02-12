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
        <>
            <section className="flex justify-center items-center h-32 bg-primary mb-8">
                <h1 className="text-accent text-3xl font-bold">NOVEDADES</h1>
                <Carousel opts={{align: 'start', loop: true}} className='w-full'>
                    <CarouselContent>
                        {news.map((item, index) => (
                            <CarouselItem key={index} className="p-4">
                                <Card key={item.title} className="relative basis-1/3 mx-auto w-full max-w-sm pt-0">
                                    <div className="absolute inset-0 z-30 aspect-video" />
                                    <Image
                                        src={item.video}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                                    />
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
        </>
    );
}
