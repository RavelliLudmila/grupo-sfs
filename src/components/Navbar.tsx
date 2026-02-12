'use client';

import Image from 'next/image';
import { Button } from './ui/button';

export default function Navbar() {
    return (
        <nav>
            <Image src="grupoSFS.svg" alt="Grupo SFS Logo" width={150} height={50} />
            <div>
                <a href="https://www.sfs.com.ar/healthcare-ai" target="_blank" rel="noopener noreferrer">
                    Healthcare AI
                </a>
                <a href="https://www.sfs.com.ar/healthcare" target="_blank" rel="noopener noreferrer">
                    Healthcare
                </a>
                <a href="https://www.sfs.com.ar/healthtrack" target="_blank" rel="noopener noreferrer">
                    HealthTrack
                </a>
                <a href="https://www.sfs.com.ar/sapma" target="_blank" rel="noopener noreferrer">
                    SAPma
                </a>
            </div>
            <div>
                <Button variant="default" size="sm" onClick={() => window.open('https://www.sfs.com.ar/contacto', '_blank')}>
                    Presentación
                </Button>
                <Button variant="secondary" size="sm" onClick={() => window.open('https://www.sfs.com.ar/contacto', '_blank')}>
                    Contacto
                </Button>
            </div>
        </nav>
    );
}
