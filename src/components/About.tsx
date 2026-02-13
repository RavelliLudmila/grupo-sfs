'use client';

import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function About() {
    return (
        <section className="container flex flex-col justify-between items-center mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary pb-6 sm:pb-8">SOBRE NOSOTROS</h2>
            <div className="grid mt-6 sm:mt-8 lg:mt-10 gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
                <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="text-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Desarrollo con respaldo médico</h3>
                        <p className="text-sm sm:text-base text-foreground">
                            Cada solución de SFS se diseña y valida con participación activa de un grupo de asesores médicos, garantizando criterio
                            clínico real en cada proyecto.
                        </p>
                    </div>
                    <div className="text-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Calidad Certificada</h3>
                        <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4">
                            Nuestros procesos de desarrollo se encuentran certificados por la norma de gestion de calidad ISO 9001.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                            <Image
                                src="/images/iso-certified.webp"
                                alt="Certificación ISO 9001"
                                width={50}
                                height={50}
                                className="sm:w-15 sm:h-15"
                            />
                            <Image
                                src="/images/QR-iso-certified.webp"
                                alt="Código QR Certificación ISO 9001"
                                width={50}
                                height={50}
                                className="sm:w-15 sm:h-15"
                            />
                            <Button
                                variant="link"
                                className="justify-start text-sm sm:text-base font-normal p-0"
                                onClick={() => window.open('/politica-de-calidad')}
                            >
                                Política de calidad <SquareArrowOutUpRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="text-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">IA clínica integrada</h3>
                        <p className="text-sm sm:text-base text-foreground">
                            Inteligencia artificial aplicada a procesos reales del sistema de salud, con modelos específicos del ámbito médico y
                            supervisión profesional.
                        </p>
                    </div>
                    <div className="text-start">
                        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Integración con HL7</h3>
                        <p className="text-sm sm:text-base text-foreground">
                            Nuestras aplicaciones utilizan el estandar HL7 para intercomunicarse entre sí y con otras soluciones de software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
