import { StyledButton } from './styles';
import { ButtonProps } from './types';

function Button({ $disabled, $btnColor }: ButtonProps) {
  return (
    <div>
      <StyledButton $disabled={$disabled} $btnColor={$btnColor}>
        {' '}
        Click{' '}
      </StyledButton>
    </div>
  );
}

export default Button;
