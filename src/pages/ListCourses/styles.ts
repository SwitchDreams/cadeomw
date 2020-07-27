import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const QtdSearch = styled.div`
    max-width: 700px;
    display: flex;
    p {
        padding: 10px;
        margin-left: 300px;
        
        
    }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        img {
            margin-top: 40px;
        }
        h1 {
            margin-left: 45px;
            margin-top: 40px;
            margin-bottom: 50px;
        }
    }
`;
export const Form = styled.div`
margin-top: 60px;
max-width: 700px;
margin: 0 auto;
padding: 25px 20px;

form {
    display: flex;
    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        background: #f2f2f2;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }
    
    button {
        width: 210px;
        height: 40px;
        background: #27004d;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        
        &:hover {
            background: ${shade(0.2, '#27004d')};
        }
        
        &:placeholder {
            color: #a8a8b3;
        }
    }
}

`;

export const Courses = styled.div`
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
        text-transform: lowercase;
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
.actions {
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
    button{
        padding: 10px;
        border-radius: 5px;
        border: 0;
        background: #27004d;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#27004d')};
        }
    }

    button[disabled] {
    opacity: 0.5;
    cursor: default;
    }
}
`;
