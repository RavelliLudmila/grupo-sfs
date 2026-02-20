export interface ChatOption {
    id: string;
    text: string;
    response?: ChatResponse;
    action?: {
        type: 'link' | 'request';
        url?: string;
    };
}

export interface ChatResponse {
    text: string;
    options?: ChatOption[];
    products?: ProductInfo[];
}

export interface ProductInfo {
    title: string;
    description: string;
    actions: {
        primary?: { text: string; url: string };
        secondary?: { text: string; url?: string };
    };
}

export const getChatData = (): ChatResponse => {
    return {
        text: '¡Hola!👋\nSoy el asistente virtual de Santa Fe Sistemas.\nTe ayudo a conocer nuestras soluciones de salud digital y a identificar la que mejor se adapta a lo que estás buscando.',
        options: [
            {
                id: 'institucion',
                text: 'Soy una institución de salud',
                response: {
                    text: 'Perfecto, estas son nuestras soluciones para instituciones de salud:',
                    products: [
                        {
                            title: 'HealthCare (Sistema de Información Hospitalaria)',
                            description:
                                'SFS HealthCare es una solución integral para la gestión de datos clínicos y administrativos, interoperable y adaptable a cada institución. Incluye historia clínica electrónica, turnos, facturación, interoperabilidad y más, todo en una plataforma 100% web.',
                            actions: {
                                primary: { text: 'Ver más', url: '/healthcare' },
                                secondary: { text: 'Solicitar presentación' },
                            },
                        },
                        {
                            title: 'HealthTrack',
                            description:
                                'SFS HealthTrack permite el seguimiento y monitoreo de los procesos asistenciales de los pacientes en tiempo real, utilizando inteligencia artificial para análisis predictivos y mejor toma de decisiones clínicas.',
                            actions: {
                                primary: { text: 'Ver más', url: '/healthtrack' },
                                secondary: { text: 'Solicitar presentación' },
                            },
                        },
                        {
                            title: 'Inteligencia Artificial aplicada a la salud',
                            description:
                                'Nuestra IA está integrada a los procesos reales del sistema de salud. Utiliza modelos específicos del ámbito médico y funciona como herramienta de asistencia, siempre con supervisión profesional.',
                            actions: {
                                primary: { text: 'Ver más', url: '/healthcare-ai' },
                                secondary: { text: 'Solicitar presentación' },
                            },
                        },
                        {
                            title: 'Solicitar una presentación',
                            description:
                                'Acompañamos a cada institución desde el diagnóstico inicial hasta la puesta en marcha y evolución del sistema. Nuestro equipo brinda soporte continuo y personalizado.',
                            actions: {
                                secondary: { text: 'Solicitar presentación' },
                            },
                        },
                    ],
                },
            },
            {
                id: 'aseguradora',
                text: 'Soy una aseguradora / gerenciadora',
                response: {
                    text: 'Perfecto, esta es nuestra solución para aseguradoras y gerenciadoras:',
                    products: [
                        {
                            title: 'SAPma',
                            description:
                                'SAPma es una solución administrativa diseñada para financiadoras de salud. Permite gestionar afiliados, facturación, nomencladores y procesos administrativos de forma integrada.',
                            actions: {
                                primary: { text: 'Ver más', url: '/sapma' },
                                secondary: { text: 'Solicitar presentación' },
                            },
                        },
                    ],
                },
            },
            {
                id: 'conocer-soluciones',
                text: 'Quiero conocer las soluciones de SFS',
                response: {
                    text: 'Desarrollamos un ecosistema de soluciones digitales para el sector salud que incluye:\n\n• SFS HealthCare (Sistema de Información Hospitalaria)\n• SFS HealthTrack\n• SFS HealthCare IA\n• SAPma',
                    options: [
                        {
                            id: 'ver-soluciones',
                            text: 'Ver soluciones',
                            action: { type: 'link', url: '/#products' },
                        },
                        {
                            id: 'solicitar-info',
                            text: 'Solicitar presentación',
                        },
                    ],
                },
            },
            {
                id: 'paciente',
                text: 'Soy un paciente',
                response: {
                    text: 'Santa Fe Sistemas desarrolla soluciones de software para instituciones de salud.\n\nNo brindamos atención médica ni gestionamos turnos, consultas o reclamos de pacientes.\n\nNo contamos con acceso a historias clínicas ni tenemos comunicación directa con los centros de salud.\n\nPara cualquier solicitud médica, administrativa o reclamo, te recomendamos comunicarte directamente con el centro o profesional donde te atendés.',
                    options: [],
                },
            },
        ],
    };
};
