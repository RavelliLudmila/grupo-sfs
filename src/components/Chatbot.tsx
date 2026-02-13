'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { chatData, ChatResponse, ChatOption } from '@/content/chatData';
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
    const [messages, setMessages] = useState<Message[]>([{ type: 'bot', content: chatData.text, response: chatData }]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

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
                className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Abrir chat"
            >
                <Image src="/images/chatbot.webp" alt="Chat" width={40} height={40} className="group-hover:scale-110 transition-transform" />
            </Button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-95 h-110 bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    <div className="bg-primary p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image src="/images/chatbot-icon.webp" alt="Chatbot Icon" width={25} height={25} />
                            <div>
                                <h3 className="text-primary-foreground font-semibold text-lg">SFS Bot</h3>
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

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                        {messages.map((message, idx) => (
                            <div key={idx}>
                                {message.type === 'bot' ? (
                                    <div className="flex gap-2 items-start">
                                        <div className="flex-1">
                                            <div className="bg-muted rounded-2xl rounded-tl-none p-4 text-sm text-foreground whitespace-pre-line">
                                                {message.content}
                                            </div>

                                            {message.response?.products && (
                                                <div className="mt-3 space-y-3">
                                                    {message.response.products.map((product, pIdx) => (
                                                        <Card key={pIdx} className="gap-2">
                                                            <CardHeader className="pb-2">
                                                                <CardTitle className="text-sm text-primary">{product.title}</CardTitle>
                                                                <CardDescription className="text-xs">{product.description}</CardDescription>
                                                            </CardHeader>
                                                            <CardContent className="pt-0">
                                                                <div className="flex gap-2">
                                                                    {product.actions.primary && (
                                                                        <Button asChild size="xs" variant="default">
                                                                            <a href={product.actions.primary.url}>{product.actions.primary.text}</a>
                                                                        </Button>
                                                                    )}
                                                                    {product.actions.secondary && (
                                                                        <Button asChild size="xs" variant="outline">
                                                                            <a href={product.actions.secondary.url}>
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
                                                <div className="mt-3 space-y-2">
                                                    {message.response.options.map((option) => (
                                                        <Button
                                                            key={option.id}
                                                            onClick={() => handleOptionClick(option, idx)}
                                                            variant="outline"
                                                            className="w-full justify-start text-left border-2 border-primary text-primary hover:bg-primary/10 hover:text-accent rounded-xl"
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
                                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-2.5 text-sm max-w-[80%]">
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
