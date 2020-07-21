import styled from 'styled-components';

export const Flux = styled.div`
  margin: 100px 550px;
`;

export const PeriodContainer = styled.div`
  background: rgba(110, 238, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);

  height: 60px;
  padding-left: 40px;
  display: flex;
  margin-bottom: 10px;
  flex: 1;
  align-items: center;
  cursor: pointer;
`;

export const PeriodText = styled.div`
  font-size: 18px;
  margin-left: 20px;
`;

export const ContentContainer = styled.div`
  margin-bottom: 35px;
`;

export const Content = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const ContentText = styled.p`
  font-size: 18px;
  margin-left: 40px;
  height: 20px;
  width: 80%;
`;

export const ContentCreditsContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 18px;
  right: 10%;
  height: 20px;
  width: 20%;
`;

export const ContentCredits = styled.p`
  margin-left: 10px;
`;
