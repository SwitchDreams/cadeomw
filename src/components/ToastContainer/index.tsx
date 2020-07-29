import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles'

import { ToastMessage } from '../../hooks/toasts'

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    return (
        <Container>
          {messages.map((message) => (
            <Toast key={message.id} type={message.type}>
              <FiAlertCircle size={20} />
                <div>
                    <strong> {message.title} </strong>
                    <p> {message.description} </p>
                </div>

                <button type="button">
                    <FiXCircle size={18} />
                </button>
            </Toast>
          ))}
        </Container>
    );
};

export default ToastContainer;