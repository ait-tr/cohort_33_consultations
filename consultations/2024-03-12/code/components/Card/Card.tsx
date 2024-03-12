import Message from '../Message/Message';
import { StyledCardWraper } from './style';

function Card() {
  return (
    <StyledCardWraper>
      <span>Имя: Иван</span>
      <span>Фамилия: Иванов</span>
      <Message />
    </StyledCardWraper>
  );
}

export default Card;
