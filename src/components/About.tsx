import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12 md:text-4xl lg:text-5xl">SOBRE NOSOTROS</h2>
            <div className="grid mt-10 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-8">
                    <div className="text-start">
                        <h3 className="text-xl font-semibold text-secondary mb-3">Desarrollo con respaldo médico</h3>
                        <p className="text-foreground">
                            Cada solución de SFS se diseña y valida con participación activa de un grupo de asesores médicos, garantizando criterio
                            clínico real en cada proyecto.
                        </p>
                    </div>
                    <div className="text-start">
                        <h3 className="text-xl font-semibold text-secondary mb-3">Calidad Certificada</h3>
                        <p className="text-foreground mb-4">
                            Nuestros procesos de desarrollo se encuentran certificados por la norma de gestion de calidad ISO 9001.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Image src="/images/iso-certified.webp" alt="Certificación ISO 9001" width={80} height={80} />
                            <Image src="/images/QR-iso-certified.webp" alt="Código QR Certificación ISO 9001" width={80} height={80} />
                            <a href="/certificado-de-calidad" className="text-secondary hover:underline inline-flex items-center">
                                Política de calidad <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-start">
                        <h3 className="text-xl font-semibold text-secondary mb-3">IA clínica integrada</h3>
                        <p className="text-foreground">
                            Inteligencia artificial aplicada a procesos reales del sistema de salud, con modelos específicos del ámbito médico y
                            supervisión profesional.
                        </p>
                    </div>
                    <div className="text-start">
                        <h3 className="text-xl font-semibold text-secondary mb-3">Integración con HL7</h3>
                        <p className="text-foreground">
                            Nuestras aplicaciones utilizan el estandar HL7 para intercomunicarse entre sí y con otras soluciones de software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
