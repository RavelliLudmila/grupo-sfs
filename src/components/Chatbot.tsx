'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getChatData, ChatResponse, ChatOption } from '@/content/chatData';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface Message {
    type: 'bot' | 'user';
    content: string;
    response?: ChatResponse;
    answered?: boolean;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            const isLarge = window.innerWidth >= 1024;
            if (messages.length === 0) {
                const chatData = getChatData(isLarge);
                setMessages([{ type: 'bot', content: chatData.text, response: chatData }]);
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [messages.length]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleOptionClick = (option: ChatOption, messageIndex: number) => {
        setMessages((prev) => prev.map((msg, idx) => (idx === messageIndex ? { ...msg, answered: true } : msg)));

        setMessages((prev) => [...prev, { type: 'user', content: option.text }]);

        if (option.action?.type === 'link' && option.action.url) {
            setTimeout(() => {
                window.location.href = option.action!.url!;
            }, 500);
            return;
        }

        if (option.response) {
            setTimeout(() => {
                setMessages((prev) => [...prev, { type: 'bot', content: option.response!.text, response: option.response }]);
            }, 600);
        }
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="outline"
                size="icon-lg"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Abrir chat"
            >
                <Image
                    src="/images/chatbot.webp"
                    alt="Chat"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
                />
            </Button>

            {isOpen && (
                <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-95 h-[70vh] sm:h-110 max-w-md bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    <div className="bg-primary p-2.5 sm:p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Image src="/images/chatbot-icon.webp" alt="Chatbot Icon" width={25} height={25} className="w-5 h-5 sm:w-6 sm:h-6" />
                            <div>
                                <h3 className="text-primary-foreground font-semibold text-base sm:text-lg">SFS Bot</h3>
                            </div>
                        </div>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="ghost"
                            size="icon-sm"
                            className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
                        >
                            ✕
                        </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-muted/30">
                        {messages.map((message, idx) => (
                            <div key={idx}>
                                {message.type === 'bot' ? (
                                    <div className="flex gap-2 items-start">
                                        <div className="flex-1">
                                            <div className="bg-muted rounded-2xl rounded-tl-none p-3 sm:p-4 text-xs sm:text-sm text-foreground whitespace-pre-line">
                                                {message.content}
                                            </div>

                                            {message.response?.products && (
                                                <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                                                    {message.response.products.map((product, pIdx) => (
                                                        <Card key={pIdx} className="gap-2">
                                                            <CardHeader className="pb-1.5 sm:pb-2 p-3 sm:p-4">
                                                                <CardTitle className="text-xs sm:text-sm text-primary">{product.title}</CardTitle>
                                                                <CardDescription className="text-[10px] sm:text-xs">
                                                                    {product.description}
                                                                </CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="pt-0 p-3 sm:p-4">
                                                                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                                                                    {product.actions.primary && (
                                                                        <Button asChild size="xs" variant="default" className="text-xs h-7">
                                                                            <a
                                                                                href={product.actions.primary.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                {product.actions.primary.text}
                                                                            </a>
                                                                        </Button>
                                                                    )}
                                                                    {product.actions.secondary && (
                                                                        <Button asChild size="xs" variant="outline" className="text-xs h-7">
                                                                            <a
                                                                                href={product.actions.secondary.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                {product.actions.secondary.text}
                                                                            </a>
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                            )}

                                            {message.response?.options && message.response.options.length > 0 && !message.answered && (
                                                <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                                                    {message.response.options.map((option) => (
                                                        <Button
                                                            key={option.id}
                                                            onClick={() => handleOptionClick(option, idx)}
                                                            variant="outline"
                                                            className="w-full justify-start text-left border-2 border-primary text-primary hover:bg-primary/10 hover:text-accent rounded-xl text-xs sm:text-sm py-2 sm:py-2.5 h-auto"
                                                        >
                                                            {option.text}
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-end">
                                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm max-w-[80%]">
                                            {message.content}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            )}
        </>
    );
}
