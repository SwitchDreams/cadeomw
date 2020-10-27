import styled, { css } from 'styled-components';

interface AllContainerProps {
  window: boolean;
}

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-weight: bold;
    padding: 0 40px 0 40px;
    font-size: 40px;
    text-align: center;
    color: #585858;

    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocalesList = styled.ul<AllContainerProps>`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;
  width: auto;
  background: rgba(230, 230, 230, 0.3);

  ${props =>
    !props.window &&
    css`
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 2px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background-color: #ddd;
      }
    `}

  li {
    display: inline-block;
    text-align: center;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
      background: rgba(230, 230, 230, 1);
    }

    h5 {
      font-weight: bold;
    }
    p {
      padding: 0;
      margin-bottom: 5px;
      width: 250px;
    }
  }

  ${props =>
    props.window &&
    css`
      li {
        h5 {
          font-size: 13px;
        }
        p {
          font-size: 12px;
          width: 200px;
        }
      }
    `}
`;

export const SearchButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin: auto;
    height: 50px;
    width: 200px;
    color: #7c4fe0;

    background: #fff;
    border: 2px solid #7c4fe0;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background: #7c4fe0;
      transition: 0.7s;
      color: #fff;
    }
  }
`;
export const ModalText = styled.div`
  form {
    input {
      height: 50px;
      width: 100%;
    }
  }
`;
