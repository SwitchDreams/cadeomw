import styled from 'styled-components';

export const Container = styled.div``;

export const Courses = styled.div`
    margin-top: 60px;
    
    
    a {

        max-width: 700px;
        margin: 0 auto;
        padding: 40px 20px;

        background: #f2f2f2;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
         transform: translateX(10px);   
        }
    
        strong {
            font-size: 20px;
            color: #3D3D4D;
        }

        p {
            font-size: 18px;
            color: #A8A8B3;
            margin-top: 4px;
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;
