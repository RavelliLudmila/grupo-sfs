'use client';

import { Button } from './ui/button';

export default function Hero() {
    return (
        <section className="relative w-full min-h-150 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.webp')" }}>
            <div className="absolute inset-0 bg-blue-500/60" />
            <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 md:py-32 lg:py-40">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">Software médico de vanguardia</h1>
                    <p className="mt-6 text-lg text-white md:text-xl lg:text-2xl">
                        Maximice la eficiencia de su institución a través de nuestras soluciones informáticas.
                    </p>
                    <p className="mt-4 text-lg text-white md:text-xl lg:text-2xl">
                        Simplifique la gestión de sus servicios, y optimice la atención a sus pacientes.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="mt-8 font-semibold px-8"
                        onClick={() => window.open('https://www.sfs.com.ar/presentacion', '_blank')}
                    >
                        Solicitar presentación
                    </Button>
                </div>
            </div>
        </section>
    );
}
