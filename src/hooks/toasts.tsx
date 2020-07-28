import React, { createContext, useContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer/'

interface ToastContextData {
    addToast(): void;
    removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData); 

const ToastProvider: React.FC = ({ children }) => {

    const addToast = useCallback(() => {
        console.log('add');
    }, []);
    
    const removeToast = useCallback(() => {
        console.log('remove');
    }, []);

    return(
        <ToastContext.Provider value = {{ addToast, removeToast }}>
            {children}
            <ToastContainer />
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