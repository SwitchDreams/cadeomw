import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toasts'

import { Container } from './styles';

interface ToastProps {
    message: ToastMessage;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success:<FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({message}) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);            
        }, 5000);
        return () => clearTimeout(timer);
    }, [removeToast, message.id])
    return(
        <Container type={message.type}>
            {icons[message.type || 'info']}
            <div>
                <strong> {message.title} </strong>
                <p> {message.description} </p>
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>

    );
}
export default Toast;