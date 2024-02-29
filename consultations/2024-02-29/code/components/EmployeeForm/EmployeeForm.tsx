import Input from 'components/Input/Input';
import './styles.css';
import { useState, ChangeEvent } from 'react';
import Button from 'components/Button/Button';
import { Person } from './types';
import Card from './Card';

function EmployeeForm() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [showCard, setShowCard] = useState<boolean>(false);

  const person: Person = {
    name,
    age,
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleShowCard = (e) => {
    e.preventDefault();
    if (name !== '' && age !== '') {
      setShowCard(true);
    } else {
      alert('Заполните поля');
    }
  };

  return (
    <div className="white_box_container">
      <form action="">
        <div className="white_box_content_container">
          <div className="white_box_content_fields">
            <div className="white_box_content_fields_inputs">
              <div className="white_box_content_fields_inputs_label"></div>
              <div className="white_box_content_fields_inputs_frame">
                <Input
                  id={'name'}
                  disabled={false}
                  name={'name'}
                  placeholder={'введите свое имя'}
                  label={'имя'}
                  type={'text'}
                  value={name}
                  onChange={handleName}
                />
              </div>
            </div>
            <div className="white_box_content_fields_inputs">
              <div className="white_box_content_fields_inputs_label"></div>
              <div className="white_box_content_fields_inputs_frame">
                <Input
                  id={'age'}
                  disabled={false}
                  name={'age'}
                  placeholder={'введите свой возраст'}
                  label={'возраст'}
                  type={'text'}
                  value={age}
                  onChange={handleAge}
                />
              </div>
            </div>
          </div>
          <div className="button_submit">
            <Button name={'создать'} type={'submit'} onClick={handleShowCard} />
          </div>
        </div>
      </form>
      {showCard ? <Card profileData={person} /> : null}
    </div>
  );
}

export default EmployeeForm;
