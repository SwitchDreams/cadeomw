import React, { createContext, useContext, useCallback, useState } from 'react';
import ToastContainer from '../components/ToastContainer/';
import { uuid } from 'uuidv4';

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(): void;
}

export interface ToastMessage {
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData); 

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
        const id = uuid();

        const toast = {
            id,
            type,
            title,
            description,
        };
        setMessages((state) => [...state, toast]);
    }, []);
    
    const removeToast = useCallback(() => {
        console.log('remove');
    }, []);

    return(
        <ToastContext.Provider value = {{ addToast, removeToast }}>
            {children}
            <ToastContainer messages = {messages}/>
        </ToastContext.Provider>
    );
}

function useToast():ToastContextData {
    const context = useContext(ToastContext);

    // Context não existe
    if(!context) {
        throw new Error('useToast precisa ser usado em um ToastProvider');
    }
    return context;
}

export { ToastProvider, useToast };