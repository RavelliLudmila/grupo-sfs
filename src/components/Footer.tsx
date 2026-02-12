'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Footer() {
    const link = [
        {
            icon: <Mail className="inline-block mr-1" />,
            text: 'info@sfs.com.ar',
            href: 'https://mail.google.com/mail/u/0/?to=info@sfs.com.ar&fs=1&tf=cm',
        },
        {
            icon: <Phone className="inline-block mr-1" />,
            text: '+54 9 3424 790990',
            href: 'https://wa.me/5493424790990',
        },
        {
            icon: <MapPin className="inline-block mr-1" />,
            text: 'Santiago Derqui 3265, Santa Fe, Argentina',
            href: 'https://maps.app.goo.gl/V9TNAz9Dwzanwyyh9',
        },
    ];
    return (
        <>
            <footer className="w-full border-t bg-linear-to-r from-primary to-muted p-8 text-center">
                <div className="flex justify-between mb-4">
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center mb-2">
                            <Image src="/images/footer-logo.webp" alt="Logo" width={32} height={96} className="inline-block mr-2" />
                        </Link>
                        <p className="inline-block">Desarrollando soluciones médicas innovadoras desde hace más de 30 años.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold mb-2">Contacto</h3>
                        <div className="flex flex-col space-y-1">
                            {link.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    {item.icon}
                                    <a href={item.href} target="_blank" className="text-sm underline hover:no-underline">
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="font-bold mb-2">Síguenos</h3>
                    <div className="flex space-x-4">
                        <Button
                            variant="outline"
                            style={{ borderRadius: '9999px' }}
                            size="sm"
                            asChild
                            onClick={() => window.open('https://www.linkedin.com/company/santafesistemas', '_blank')}
                        >
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            style={{ borderRadius: '9999px' }}
                            size="sm"
                            asChild
                            onClick={() => window.open('https://www.instagram.com/santafesistemas', '_blank')}
                        >
                            <Instagram className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            style={{ borderRadius: '9999px' }}
                            size="sm"
                            asChild
                            onClick={() => window.open('https://www.facebook.com/santafesistemas', '_blank')}
                        >
                            <Facebook className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex space-x-2">
                        <a href="http://qr.afip.gob.ar/?qr=vFCbhkDBxlQy6R3Qbw7d8w,," target="_blank">
                            <Image src="/images/data-fiscal.webp" alt="Data Fiscal" width={32} height={32} className="inline-block mt-4" />
                        </a>
                        <a href="https://www.clusterticsantafe.org" target="_blank">
                            <Image
                                src="/images/logo-cluster-tic.webp"
                                alt="Cluster Tic Santa Fe"
                                width={32}
                                height={96}
                                className="inline-block mt-4"
                            />
                        </a>
                    </div>
                </div>
                <div className="border-b border-gray-300 my-4" />
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Grupo SFS. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}
