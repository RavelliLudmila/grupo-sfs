'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-36 backdrop-blur-sm shadow-sm transition-all duration-300 ${isScrolled ? 'py-3 bg-card/75' : 'py-6 bg-card'}`}
        >
            <Link href="/" className="flex items-center">
                <Image
                    src={isScrolled ? '/isotipo.png' : '/grupo-sfs.png'}
                    alt="Grupo SFS Logo"
                    width={isScrolled ? 40 : 150}
                    height={isScrolled ? 40 : 50}
                    className="transition-all duration-300"
                />
            </Link>
            <div className="flex items-center gap-8">
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthcare-ai', '_blank')}
                    className="text-base hover:no-underline hover:text-foreground"
                >
                    HealthCare AI
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthcare', '_blank')}
                    className="text-base hover:no-underline hover:text-foreground"
                >
                    HealthCare
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthtrack', '_blank')}
                    className="text-base hover:no-underline hover:text-foreground"
                >
                    HealthTrack
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/sapma', '_blank')}
                    className="text-base hover:no-underline hover:text-foreground"
                >
                    SAPma
                </Button>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="default" onClick={() => window.open('/presentacion', '_blank')}>
                    Presentación
                </Button>
                <Button variant="secondary" onClick={() => window.open('https://online.sfssa.com.ar', '_blank')}>
                    Acceder
                </Button>
            </div>
        </nav>
    );
}
