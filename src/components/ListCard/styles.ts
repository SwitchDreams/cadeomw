import styled, { css } from 'styled-components';
import { ThemeType } from '../../App'

interface CardProps {
    theme: ThemeType;
    window: boolean;
}

export const CardWrapper = styled.div<CardProps>`
    a {
        max-width: 700px;
        margin: 0 auto;
        padding: 40px 20px;

        background: ${({ theme }) => theme.colors.list_cards};
        border-radius: 5px;
        width: 90%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        p {
        margin-bottom: 3px;
        }

        ${props =>
        props.window &&
        css`
            height: 90px;
        `}

        &:hover {
        transform: translateX(10px);
        }

        strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.text};
        ${props =>
        props.window &&
        css`
            font-size: 16px;
            `}
        }

        p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        ${props =>
        props.window &&
        css`
            font-size: 12px;
            `}
        }

        svg {
        margin-left: auto;
        color: #cbcbd6;
        }
    }

    & + div {
        margin-top: 16px;
    }
`;

