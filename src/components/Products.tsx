'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { ButtonGroup } from './ui/button-group';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import PresentationForm from './PresentationForm';
import { useRouter } from 'next/navigation';

export default function Products() {
    const [showInstitutions, setShowInstitutions] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const productsInstitutions = [
        {
            image: '/images/healthcare-ai.webp',
            name: 'HealthCare AI',
            description: 'Modulo completo al servicio de instituciones, profesionales y pacientes. Facilita procesos y mejora los productos de SFS.',
            link: '/healthcare-ai',
        },
        {
            image: '/images/healthcare.webp',
            name: 'HealthCare',
            description:
                'Solución integral para la gestión de datos clínicos y administrativos. Facilita la interoperabilidad entre diferentes sistemas.',
            link: '/healthcare',
        },
        {
            image: '/images/healthtrack.webp',
            name: 'HealthTrack',
            description: 'Permite el seguimiento y monitoreo de la salud de los pacientes en tiempo real.',
            link: '/healthtrack',
        },
        {
            image: '/images/SAPma.webp',
            name: 'SAPma',
            description: 'Aplicaciones y modulos web para la administración de aseguradoras y financiadoras de salud.',
            link: '/sapma',
        },
    ];
    const productsPatients = [
        {
            image: '/images/app.webp',
            name: 'App para el paciente',
            description: 'Aplicación móvil para facilitar el acceso de los pacientes a su información clínica.',
        },
        {
            image: '/images/teleconsulta.webp',
            name: 'Teleconsulta',
            description: 'Consultas Paciente-Profesional desde la comodidad de su hogar.',
        },
        {
            image: '/images/triage.webp',
            name: 'Triage',
            description: 'Protocolo de selección y clasificación de pacientes.',
        },
    ];

    return (
        <>
            <section id="products" className="container flex flex-col justify-between items-center mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-secondary">PRODUCTOS Y SOLUCIONES DE SOFTWARE</h2>
                <ButtonGroup className="justify-center mt-8 bg-button-inactive rounded-md">
                    <Button
                        {...(showInstitutions ? { variant: 'select' } : { variant: 'ghost' })}
                        size="lg"
                        onClick={() => setShowInstitutions(true)}
                    >
                        Para instituciones
                    </Button>
                    <Button
                        {...(!showInstitutions ? { variant: 'select' } : { variant: 'ghost' })}
                        size="lg"
                        onClick={() => setShowInstitutions(false)}
                    >
                        Para sus pacientes
                    </Button>
                </ButtonGroup>
                <div className={`mt-10 grid gap-8 ${showInstitutions ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1 lg:grid-cols-3 lg:w-3/4'}`}>
                    {showInstitutions
                        ? productsInstitutions.map((product) => (
                              <Card key={product.name} className="relative mx-auto w-full overflow-hidden pt-0!">
                                  <Image
                                      src={product.image}
                                      alt={product.name}
                                      width={400}
                                      height={300}
                                      className="w-full object-cover aspect-video"
                                  />
                                  <div className="flex flex-col h-full justify-between">
                                      <CardHeader className="text-start">
                                          <CardTitle>{product.name}</CardTitle>
                                          <CardDescription>{product.description}</CardDescription>
                                      </CardHeader>
                                      <CardFooter className="pt-6">
                                          <Button variant="link" size="sm" className="justify-start p-0" onClick={() => router.push(product.link)}>
                                              Ver más
                                              <ArrowRight className="ml-2" />
                                          </Button>
                                      </CardFooter>
                                  </div>
                              </Card>
                          ))
                        : productsPatients.map((product) => (
                              <Card key={product.name} className="relative mx-auto w-full overflow-hidden pt-0!">
                                  <Image
                                      src={product.image}
                                      alt={product.name}
                                      width={400}
                                      height={300}
                                      className="w-full object-cover aspect-video"
                                  />
                                  <CardHeader className="text-start">
                                      <CardTitle>{product.name}</CardTitle>
                                      <CardDescription>{product.description}</CardDescription>
                                  </CardHeader>
                              </Card>
                          ))}
                </div>
                <h3 className="text-2xl text-secondary mt-12">¿Querés tener una experiencia personalizada?</h3>
                <Button variant="default" size="lg" className="mt-5" onClick={() => setIsModalOpen(true)}>
                    Solicitar presentación
                </Button>
            </section>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-md">
                    <PresentationForm />
                </DialogContent>
            </Dialog>
        </>
    );
}
