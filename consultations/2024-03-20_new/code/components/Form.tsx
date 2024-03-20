import Card from './Card';
import './styles.css';

export default function Form() {
  return (
    <>
      <div className="form_wrapper">
        <form className="form">
          <div className="inputContainer">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" />
          </div>
          <div className="inputContainer">
            <label htmlFor="age">Возраст</label>
            <input type="text" id="age" />
          </div>
          <div className="inputContainer">Отправить</div>
        </form>
        <Card />
      </div>
    </>
  );
}
