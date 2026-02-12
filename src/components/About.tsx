import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <>
            <section className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">SOBRE NOSOTROS</h2>
                <div className="grid mt-10 gap-8 grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <div className="text-start">
                            <h3 className="text-xl font-semibold text-secondary">Desarrollo con respaldo médico</h3>
                            <p className="text-foreground">
                                Cada solución de SFS se diseña y valida con participación activa de un grupo de asesores médicos, garantizando
                                criterio clínico real en cada proyecto.
                            </p>
                        </div>
                        <div className="text-start">
                            <h3 className="text-xl font-semibold text-secondary">IA clínica integrada</h3>
                            <p className="text-foreground">
                                Inteligencia artificial aplicada a procesos reales del sistema de salud, con modelos específicos del ámbito médico y supervisión profesional.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-start">
                            <h3 className="text-xl font-semibold text-secondary">Calidad Certificada</h3>
                            <p className="text-foreground">
                                Nuestros procesos de desarrollo se encuentran certificados por la norma de gestion de calidad ISO 9001.
                            </p>
                            <div className="border-b border-gray-300 my-4"/>
                            <Image src="/images/iso9001-certification.png" alt="Certificación ISO 9001" />
                            <Image src="/images/iso9001-qr.png" alt="Código QR Certificación ISO 9001" />
                            <a href="/certificado-de-calidad" className="text-secondary">Política de Calidad <SquareArrowOutUpRight className="inline-block ml-2" /></a>
                        </div>
                        <div className="text-start">
                            <h3 className="text-xl font-semibold text-secondary">Integración con HL7</h3>
                            <p className="text-foreground">
                                Nuestras aplicaciones utilizan el estandar HL7 para intercomunicarse entre sí y con otras soluciones de software.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
