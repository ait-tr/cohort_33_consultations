import Card from 'homeworks/Homework27/components/Card/Card';
import { StyledBlogWraper, StyledButton, StyledTextarea } from './style';
import { ChangeEvent, createContext, useState } from 'react';

export const MyTextareaContext = createContext({
  myBlogMessage: '',
});

function BlogManagement() {
  const [textareaMessage, setTextareaMessage] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleTextareaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaMessage(event.target.value);
  };

  const handleSetMessage = () => {
    setMessage(textareaMessage);
    setIsDisplay(true);
  };

  return (
    <StyledBlogWraper>
      <StyledTextarea
        id="textArea"
        name="textAreaId"
        onChange={handleTextareaMessage}
        value={textareaMessage}
      />
      <StyledButton onClick={handleSetMessage}>Запостить</StyledButton>

      <MyTextareaContext.Provider value={{ myBlogMessage: message }}>
        {isDisplay ? <Card /> : <></>}
      </MyTextareaContext.Provider>
    </StyledBlogWraper>
  );
}

export default BlogManagement;
