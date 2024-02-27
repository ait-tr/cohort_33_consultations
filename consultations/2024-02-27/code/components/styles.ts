import styled from '@emotion/styled';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.$disabled ? 'light-grey' : props.$btnColor)};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${(props) =>
    props.$disabled ? '2px solid #efefef' : '2px solid #BF4F74'};
  border-radius: 3px;
  height: 100px;
  width: 200px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : null)};
`;

export const StyledInput = styled.input<ButtonProps>`
  padding: 10px;
  color: green;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : null)};
`;
