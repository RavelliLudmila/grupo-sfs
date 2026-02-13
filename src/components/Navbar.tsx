'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GMAIL_LINK, MAILTO_LINK } from '@/lib/constants';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'HealthCare AI', href: '/healthcare-ai' },
        { label: 'HealthCare', href: '/healthcare' },
        { label: 'HealthTrack', href: '/healthtrack' },
        { label: 'SAPma', href: '/sapma' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-36 backdrop-blur-sm shadow-sm transition-all duration-300 ${isScrolled ? 'py-2 sm:py-3 bg-card/75' : 'py-4 sm:py-6 bg-card'}`}
        >
            <Link href="/" className="flex items-center">
                <Image
                    src={isScrolled ? '/isotipo.png' : '/grupo-sfs.png'}
                    alt="Grupo SFS Logo"
                    width={isScrolled ? 40 : 120}
                    height={isScrolled ? 40 : 40}
                    className="transition-all duration-300 lg:w-auto"
                />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
                {menuItems.map((item) => (
                    <Button
                        key={item.label}
                        variant="link"
                        rel="noopener noreferrer"
                        onClick={() => window.open(item.href, '_blank')}
                        className="text-base hover:no-underline hover:text-foreground"
                    >
                        {item.label}
                    </Button>
                ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
                <Button variant="default" onClick={() => window.open(GMAIL_LINK, '_blank')}>
                    Solicitar presentación
                </Button>
                <Button variant="secondary" onClick={() => window.open('https://online.sfssa.com.ar', '_blank')}>
                    Acceder al sistema
                </Button>
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-card shadow-lg lg:hidden">
                    <div className="flex flex-col p-4 space-y-2">
                        {menuItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                className="justify-start w-full"
                                onClick={() => {
                                    window.open(item.href, '_blank');
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <div className="border-t pt-2 mt-2 space-y-2">
                            <Button
                                variant="default"
                                className="w-full"
                                onClick={() => {
                                    window.open(MAILTO_LINK, '_blank');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Solicitar presentación
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full"
                                onClick={() => {
                                    window.open('https://online.sfssa.com.ar', '_blank');
                                    setIsMenuOpen(false);
                                }}
                            >
                                Acceder al sistema
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
