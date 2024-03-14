import { ChangeEvent, useEffect, useState } from 'react';
import WeatherError from './components/WeatherError/WeaherError';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import { WeatherWrapper, Header, Main, InputWraper, Input, Button } from './styles';
const myID = '79b1feb2992617563eb644533ad7cb2d';

function Weather() {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [city, setCity] = useState<string>('Berlin');
  const [triger, setTriger] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>('');
  const [isWeater, setIsWeather] = useState<boolean>(true);

  const handleInputMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const getCity = () => {
    setCity(inputMessage);
    setTriger((prev) => !prev);
    setLoading('Loading...');
  };

  const getCityWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myID}`);
      const data = await response.json();
      console.log(' ===> data', data);
      if (data) setLoading('');

      if (!response.ok) {
        throw Object.assign(new Error('bad request'), { code: data.cod, message: data.message });
      } else {
        //data is prop for <WeatherInfo/>
        setIsWeather(true);
      }
    } catch (err: any | unknown) {
      setIsWeather(false);
      //err.code and err.message are props for <WeatherError/>
      console.log(' ===> ', err.code);
      console.log(' ===> ', err.message);
    }
  };

  useEffect(() => {
    getCityWeather();
  }, [triger, city]);

  return (
    <WeatherWrapper>
      <Header>Weather app</Header>
      <Main>
        <InputWraper>
          <Input onChange={handleInputMessage} value={inputMessage} />
          <Button onClick={getCity}>Search</Button>
        </InputWraper>
        {/* Тут нужно показывать компоненты WheatherInfo или WeatherError
        в зависимоти от того какие данные придут, с ошибкой или с информацией о погоде */}
        <h1>{loading}</h1>
        {isWeater ? <WeatherInfo /> : <WeatherError />}
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
