import styled from 'styled-components';
import { ThemeType } from '../../App';

interface CoursesProps {
  window: boolean;
  theme: ThemeType;
}

export const Title = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.color};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  width: 70%;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 15px;
  margin: auto;
  top: 5px;
`;

export const Information = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.color};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  width: 50%;
  padding: 10px;
  color: white;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const TableContainer = styled.div<CoursesProps>`
  .table {
    color: ${({ theme }) => theme.colors.text};
  }

  margin: auto;
  position: relative;
  top: 5vh;
  width: 90%;
`;

export const TopContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
