import styled from 'styled-components';

interface CoursesProps {
  window: boolean;
}

export const Title = styled.div`
  background-color: #7c4fe0;
  position: relative;
  width: 70%;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 15px;
  margin: auto;
  top: 5px;
`
export const Information = styled.div`
  background-color: #7c4fe0;
  opacity: 0.8;
  width: 50%;
  padding: 10px;
  color: white;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const TableContainer = styled.div<CoursesProps>`
  margin: auto;
  position: relative;
  top: 5vh;
  width: 90%
`

export const TopContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

`