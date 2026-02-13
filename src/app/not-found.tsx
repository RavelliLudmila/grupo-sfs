import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-[200px] font-bold text-blue-200 leading-none mb-8">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                    La página que estás buscando no existe o se encuentra en construcción.
                </h2>
                <p className="text-gray-500 mb-8">Próximamente ...</p>
                <Link href="/">
                    <Button variant="default" size="lg">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Volver al inicio
                    </Button>
                </Link>
            </div>
        </div>
    );
}
