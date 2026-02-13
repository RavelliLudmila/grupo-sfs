'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-36 py-6 bg-white shadow-sm">
            <Link href='/' className="flex items-center">
                <Image src="/grupo-sfs.png" alt="Grupo SFS Logo" width={150} height={50} />
            </Link>
            <div className="flex items-center gap-8">
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthcare-ai', '_blank')}
                    className='text-base hover:no-underline hover:text-foreground'
                >
                    HealthCare AI
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthcare', '_blank')}
                    className='text-base hover:no-underline hover:text-foreground'
                >
                    HealthCare
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/healthtrack', '_blank')}
                    className='text-base hover:no-underline hover:text-foreground'
                >
                    HealthTrack
                </Button>
                <Button
                    variant="link"
                    rel="noopener noreferrer"
                    onClick={() => window.open('/sapma', '_blank')}
                    className='text-base hover:no-underline hover:text-foreground'
                >
                    SAPma
                </Button>
            </div>
            <div className="flex items-center gap-3">
                <Button
                    variant="default"
                    onClick={() => window.open('/presentacion', '_blank')}
                >
                    Presentación
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => window.open('https://online.sfssa.com.ar', '_blank')}
                >
                    Acceder
                </Button>
            </div>
        </nav>
    );
}
