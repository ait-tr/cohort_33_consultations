import { StyledInput } from './styles';
import './styles.css';
import { ButtonProps } from './types';

function Input({ $disabled }: ButtonProps) {
  return (
    <div className="input_container">
      <StyledInput $disabled={$disabled} />
    </div>
  );
}

export default Input;
