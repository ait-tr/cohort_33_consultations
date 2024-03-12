import { useContext } from 'react';
import { MyTextareaContext } from '../BlogManagement/BlogManagement';

function Message() {
  const myMessage = useContext(MyTextareaContext);

  const { myBlogMessage } = myMessage;
  return (
    <div>
      <span>Сообщение: {myBlogMessage}</span>
    </div>
  );
}

export default Message;
