'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const link = [
        {
            icon: <Mail className="h-5 w-5" />,
            text: 'info@sfs.com.ar',
            href: isLargeScreen ? 'https://mail.google.com/mail/u/0/?to=info@sfs.com.ar&fs=1&tf=cm' : 'mailto:info@sfs.com.ar',
        },
        {
            icon: <Phone className="h-5 w-5" />,
            text: '+54 9 (3424) 790990',
            href: 'https://wa.me/5493424790990',
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            text: 'Santiago Derqui 3265, Santa Fe, Argentina',
            href: 'https://maps.app.goo.gl/V9TNAz9Dwzanwyyh9',
        },
    ];
    return (
        <footer className="w-full bg-linear-to-r from-primary to-muted text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="flex flex-col items-start">
                        <Button variant="link" className="p-0 mb-3 sm:mb-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Image src="/images/footer-logo.webp" alt="Logo" width={100} height={33} className="sm:w-30 sm:h-10" />
                        </Button>
                        <p className="text-xs sm:text-sm leading-relaxed">Desarrollando soluciones médicas innovadoras desde hace más de 30 años.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contacto</h3>
                        <div className="flex flex-col space-y-2 sm:space-y-3">
                            {link.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:underline"
                                >
                                    <span className="shrink-0">{item.icon}</span>
                                    <span className="text-xs sm:text-sm wrap-break-word">{item.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Síguenos</h3>
                        <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-white hover:bg-gray-100 w-9 h-9 sm:w-10 sm:h-10"
                                onClick={() => window.open('https://www.linkedin.com/company/santafesistemas', '_blank')}
                            >
                                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-white hover:bg-gray-100 w-9 h-9 sm:w-10 sm:h-10"
                                onClick={() => window.open('https://www.instagram.com/santafesistemas', '_blank')}
                            >
                                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-white hover:bg-gray-100 w-9 h-9 sm:w-10 sm:h-10"
                                onClick={() => window.open('https://www.facebook.com/santafesistemas', '_blank')}
                            >
                                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                            </Button>
                        </div>
                        <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
                            <a href="http://qr.afip.gob.ar/?qr=vFCbhkDBxlQy6R3Qbw7d8w,," target="_blank" rel="noopener noreferrer">
                                <Image src="/images/data-fiscal.webp" alt="Data Fiscal" width={50} height={50} className="sm:w-15 sm:h-15" />
                            </a>
                            <a href="https://www.clusterticsantafe.org" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/logo-cluster-tic.webp"
                                    alt="Cluster Tic Santa Fe"
                                    width={100}
                                    height={33}
                                    className="sm:w-30 sm:h-10"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/30 pt-4 sm:pt-6">
                    <p className="text-xs sm:text-sm text-center">&copy; {new Date().getFullYear()} Grupo SFS. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
