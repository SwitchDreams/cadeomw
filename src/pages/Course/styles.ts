import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;
  background: #217580;
  display: flex;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 50%;
  align-items: center;

  a {
    margin: auto;
    text-decoration: none;
  }
`;

export const TabText = styled.p`
  color: #fff;
  font-size: 25px;
  align-items: center;
`;

export const Flux = styled.div`
  margin: 20px 550px;
`;

export const PeriodContainer = styled.div`
  background: rgba(110, 238, 255, 0.1);
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
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  -ms-transition: all 2s ease;
  transition: all 2s ease;
`;

export const Content = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.p`
  font-size: 18px;
  margin-left: 40px;
  margin-top: 25px;
  height: 20px;
  width: 80%;
`;

export const ContentCredits = styled.p`
  font-size: 18px;
  right: 10%;
  margin-top: 25px;
  height: 20px;
  width: 20%;
`;
