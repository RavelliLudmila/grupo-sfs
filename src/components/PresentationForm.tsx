'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import * as yup from 'yup';
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';

type FormState = 'inactive' | 'loading' | 'success' | 'error';

interface PresentationFormProps {
    source?: string;
}

// Esquema de validación: nombre completo (2 palabras), email válido, ciudad e institución
const validationSchema = yup.object().shape({
    fullName: yup
        .string()
        .required('Escriba un nombre para continuar')
        .test('two-words', 'Ingrese nombre y apellido', (value) => {
            return value ? value.trim().split(' ').length >= 2 : false;
        }),
    email: yup.string().required('Escriba un email para continuar').email('Escriba un email válido para continuar'),
    phone: yup.string(),
    city: yup.string().required('Escriba una ciudad para continuar').trim(),
    institution: yup.string().required('Escriba una institución para continuar').trim(),
});

// Formulario con validación, envío a Formspree y estados de éxito/error
export default function PresentationForm({ source = 'General' }: PresentationFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        institution: '',
    });
    const [formState, setFormState] = useState<FormState>('inactive');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = async (): Promise<boolean> => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: { [key: string]: string } = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = await validateForm();
        if (!isValid) {
            return;
        }

        setFormState('loading');

        try {
            const response = await fetch('https://formspree.io/f/mqkogqvn', {
                method: 'POST',
                body: JSON.stringify({
                    _subject: `Solicitud de presentación - ${source}`,
                    nombre: formData.fullName,
                    email: formData.email,
                    telefono: formData.phone,
                    ciudad: formData.city,
                    institucion: formData.institution,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setFormState('success');
            } else {
                setFormState('error');
            }
        } catch {
            setFormState('error');
        }
    };

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleRetry = () => {
        setFormState('inactive');
    };

    if (formState === 'success') {
        return (
            <>
                <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="absolute rounded-full top-4 right-4 hover:bg-accent/25">
                        <X size={20} />
                    </Button>
                </DialogClose>

                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <DialogHeader className="items-center">
                        <DialogTitle className="text-2xl">¡Solicitud enviada!</DialogTitle>
                        <DialogDescription>En breve nos vamos a comunicar con vos al correo:</DialogDescription>
                    </DialogHeader>
                    <p className="font-semibold text-primary mt-2">{formData.email}</p>
                </div>
            </>
        );
    }

    if (formState === 'error') {
        return (
            <>
                <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="absolute rounded-full top-4 right-4 hover:bg-accent/25">
                        <X size={20} />
                    </Button>
                </DialogClose>

                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                        <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <DialogHeader className="items-center">
                        <DialogTitle className="text-2xl">Error al enviar</DialogTitle>
                        <DialogDescription>Ha ocurrido un error, por favor revisa tus datos o vuelve a intentar más tarde</DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-6 sm:justify-center">
                        <Button onClick={handleRetry} variant="secondary">
                            Volver a intentar
                        </Button>
                    </DialogFooter>
                </div>
            </>
        );
    }

    return (
        <>
            {formState === 'loading' && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                    <div className="flex flex-col items-center">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="mt-4 text-muted-foreground font-medium">Enviando...</p>
                    </div>
                </div>
            )}

            <DialogClose asChild>
                <Button variant="ghost" size="icon" className="absolute rounded-full top-4 right-4 hover:bg-accent/25">
                    <X size={20} />
                </Button>
            </DialogClose>

            <DialogHeader>
                <DialogTitle className="text-2xl">Solicitar presentación</DialogTitle>
                <DialogDescription>Completá el formulario y coordinemos una presentación.</DialogDescription>
            </DialogHeader>

            <div className="pt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Nombre completo</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Nombre Apellido"
                            className={errors.fullName ? 'border-destructive' : ''}
                        />
                        {errors.fullName && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="correo@electrónico.com"
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">
                            Número telefónico <span className="text-muted-foreground">(opcional)</span>
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+54 11 12345678"
                            className={errors.phone ? 'border-destructive' : ''}
                        />
                        {errors.phone && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Santa Fe, Argentina"
                            className={errors.city ? 'border-destructive' : ''}
                        />
                        {errors.city && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.city}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="institution">Institución</Label>
                        <Input
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            placeholder="Grupo SFS"
                            className={errors.institution ? 'border-destructive' : ''}
                        />
                        {errors.institution && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.institution}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit" disabled={formState === 'loading'} className="w-full">
                            Solicitar presentación
                        </Button>
                    </DialogFooter>
                </form>
            </div>
        </>
    );
}
