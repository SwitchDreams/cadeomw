import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles'

import { ToastMessage, useToast} from '../../hooks/toasts'
import Toast from './Toast'
interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(messages, (message) => message.id, 
        {
            from: { right: '-120%' },
            enter: { right: '0%' },
            leave: { right: '-120%' },
        },
    );

    return (
        <Container>
          {messagesWithTransitions.map(({ item, key, props }) => (
            <Toast key={key} style={props} message={item} />
          ))}
        </Container>
    );
};

export default ToastContainer;