import styled from 'styled-components';

export const Message = styled.div`
  padding: 5px;

  &::after {
    content: '';
    height: 1px;
    width: 300px;
    background-color: #7c4fe0;
    display: block;
    margin: 10px auto;
  }
`;

export const Response = styled.div``;
