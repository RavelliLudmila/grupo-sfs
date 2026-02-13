'use client';

import Image from 'next/image';
import { Button } from './ui/button';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
            <div className="flex items-center">
                <Image src="/grupoSFS.svg" alt="Grupo SFS Logo" width={150} height={50} />
            </div>
            <div className="flex items-center gap-8">
                <a
                    href="https://www.sfs.com.ar/healthcare-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                    HealthCare AI
                </a>
                <a
                    href="https://www.sfs.com.ar/healthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                    HealthCare
                </a>
                <a
                    href="https://www.sfs.com.ar/healthtrack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                    HealthTrack
                </a>
                <a
                    href="https://www.sfs.com.ar/sapma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                    SAPma
                </a>
            </div>
            <div className="flex items-center gap-3">
                <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open('https://www.sfs.com.ar/contacto', '_blank')}
                    className="bg-blue-400 hover:bg-blue-500"
                >
                    Presentación
                </Button>
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => window.open('https://www.sfs.com.ar/contacto', '_blank')}
                    className="bg-indigo-900 hover:bg-indigo-800 text-white"
                >
                    Acceder
                </Button>
            </div>
        </nav>
    );
}
