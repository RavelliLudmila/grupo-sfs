import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const arimoSans = Arimo({
    variable: '--font-arimo-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.sfs.com.ar'),

    title: {
        default: 'Grupo SFS | Software Médico y Sistema Hospitalario en Argentina',
        template: '%s | Grupo SFS',
    },

    description:
        'Software médico para hospitales y clínicas en Argentina. HIS integral, IA clínica supervisada y gestión administrativa para financiadoras. Transformá la eficiencia operativa de tu institución.',

    keywords: [
        'SFS HealthCare',
        'SFS HealthCare AI',
        'SFS HealthTrack',
        'SFS SAPma',
        'HealthCare',
        'HealthCare AI',
        'HealthTrack',
        'SAPma',
        'agenda médica',
        'agenda miento médico',
        'software consultorio',
        'software médico',
        'software para clínicas',
        'software para hospitales',
        'sistema de historia clínica',
        'sistema hospitalario',
        'turnero médico',
        'receta electrónica',
        'videoconsulta',
        'Telemedicinas',
        'IA clínica',
        'IA médica',
        'inteligencia artificial en salud',
        'tecnología médica',
        'HIS Argentina',
        'Sistema de Información Hospitalaria Argentina',
        'salud digital Argentina',
        'gestión hospitalaria',
        'historia clínica digital',
        'historia clínica electrónica',
        'SAPma aseguradoras',
    ],

    authors: [{ name: 'Grupo SFS', url: 'https://www.sfs.com.ar' }],

    creator: 'Grupo SFS',
    publisher: 'Grupo SFS',

    category: 'Health Technology',

    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://www.sfs.com.ar',
        title: 'Grupo SFS | Software Médico para el sector salud',
        description:
            'Soluciones digitales para hospitales, clínicas y financiadoras. Sistema de Información Hospitalaria integral, IA clínica supervisada y sistemas administrativos especializados.',
        siteName: 'Grupo SFS',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Grupo SFS - Software Médico e IA Clínica',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Grupo SFS | Software Médico para el sector salud',
        description: 'Tecnología médica de vanguardia para instituciones de salud.',
        images: ['/og-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    alternates: {
        canonical: 'https://www.sfs.com.ar',
    },

    other: {
        'theme-color': '#5B96BA',
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es-AR">
            <body className={`${arimoSans.variable} antialiased`}>
                <Navbar />
                {children}
                <Footer />
                <Chatbot />
            </body>
        </html>
    );
}
