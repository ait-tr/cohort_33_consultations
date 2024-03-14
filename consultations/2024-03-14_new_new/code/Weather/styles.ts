import styled from '@emotion/styled';

import { WeatherImg } from 'assets';

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const InputWraper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
`;
