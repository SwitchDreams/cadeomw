import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles'

import { ToastMessage, useToast } from '../../hooks/toasts'

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const { removeToast } = useToast();

    return (
        <Container>
          {messages.map((message) => (
            <Toast key={message.id} type={message.type}>
              <FiAlertCircle size={20} />
                <div>
                    <strong> {message.title} </strong>
                    <p> {message.description} </p>
                </div>

                <button onClick={() => removeToast(message.id)} type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
          ))}
        </Container>
    );
};

export default ToastContainer;