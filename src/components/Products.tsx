import Image from 'next/image';
import { Button } from './ui/button';
import { ButtonGroup } from './ui/button-group';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

export default function Products() {
    const products = [
        {
            image: '/images/mockup-healthcare-ai.png',
            name: 'HealthCareAI',
            description: 'Modulo completo al servicio de instituciones, profesionales y pacientes. Facilita procesos y mejora los productos de SFS.',
            link: 'https://www.sfs.com.ar/healthcare-ai',
        },
        {
            image: '/images/mockup-healthcare.png',
            name: 'HealthCare',
            description:
                'Solución integral para la gestión de datos clínicos y administrativos. Facilita la interoperabilidad entre diferentes sistemas.',
            link: 'https://www.sfs.com.ar/healthcare',
        },
        {
            image: '/images/mockup-healthtrack.png',
            name: 'HealthTrack',
            description: 'Permite el seguimiento y monitoreo de la salud de los pacientes en tiempo real.',
            link: 'https://www.sfs.com.ar/healthtrack',
        },
        {
            image: '/images/mockup-sapma.png',
            name: 'SAPma',
            description: 'Aplicaciones y modulos web para la administración de aseguradoras y financiadoras de salud.',
            link: 'https://www.sfs.com.ar/sapma',
        },
    ];
    return (
        <>
            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">PRODUCTOS Y SOLUCIONES DE SOFTWARE</h2>
                <ButtonGroup>
                    <Button variant="outline" size="lg" className="mt-5">
                        Para instituciones
                    </Button>
                    <Button variant="outline" size="lg" className="mt-5">
                        Para sus pacientes
                    </Button>
                </ButtonGroup>
                <div className="mt-10 grid gap-8 grid-cols-4">
                    {products.map((product) => (
                        <Card key={product.name} className="relative mx-auto w-full max-w-sm pt-0">
                            <div className="absolute inset-0 z-30 aspect-video" />
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                            />
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                                <Button variant="link" size="sm" className="mt-4" onClick={() => window.open(product.link)}>
                                    Ver más
                                    <ArrowRight className="ml-2" />
                                </Button>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <h3 className="text-2xl text-secondary">¿Querés tener una experiencia personalizada?</h3>
                <Button variant="default" size="lg" className="mt-5" onClick={() => window.open('/presentation')}>
                    Solicitar presentación
                </Button>
            </section>
        </>
    );
}
