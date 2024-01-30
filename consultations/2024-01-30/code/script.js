//выполнить команды
// npm init (все поля оставить по умолчанию)
// npm install process

const process = require('process');
var args = process.argv;
//args -  массив который начиная с 3-его элемента содержит данные, которые мы вводим в терминале
//Ввести данные в терминале:
// node <filename.js> <somedata>

function weather(decode) {
  console.log(`Вы ввели код погоды: ${decode}`);
  switch (decode) {
    case 'SQ':
      console.log('ожидается шквал');
      break;
    case 'PO':
      console.log('ожидается пыльный вихрь');
      break;
    case 'FC':
      console.log('ожидается торнадо');
      break;
    case 'BR':
      console.log('ожидается дымка, видимость до 9 км');
      break;
    case 'HZ':
      console.log('ожидается мгла, видимость менее 10 км');
      break;
    case 'FU':
      console.log(' ожидается дым');
      break;
    case 'DS':
      console.log('ожидается пыльная буря');
      break;
    case 'SS':
      console.log('ожидается песчаная буря');
      break;
    default:
      console.log('Вы ввели неправильный код. Таких кодов у нас нет');
      break;
  }
}
let decode = args[2];
weather(decode);
