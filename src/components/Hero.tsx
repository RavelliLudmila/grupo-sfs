'use client';

import { Button } from './ui/button';

export default function Hero() {
    return (
        <>
            <section style={{ backgroundImage: "url('/images/hero-bg.webp')" }}>
                <div className="container bg-linear-to-r from-primary to-black/50 mx-auto px-6 py-20 text-start">
                    <h1 className="text-4xl font-bold text-background md:text-5xl lg:text-6xl">Software médico de vanguardia</h1>
                    <p className="mt-5 text-lg text-background md:text-xl lg:text-2xl">
                        Maximice la eficiencia de su institución a través de nuestras soluciones informáticas.
                    </p>
                    <p className="mt-5 text-lg text-background md:text-xl lg:text-2xl">
                        Simplifique la gestión de sus servicios, y optimice la atención a sus pacientes.
                    </p>
                    <Button variant="outline" size="lg" className="mt-5" onClick={() => window.open('https://www.sfs.com.ar/presentacion', '_blank')}>
                        Presentación
                    </Button>
                </div>
            </section>
        </>
    );
}
