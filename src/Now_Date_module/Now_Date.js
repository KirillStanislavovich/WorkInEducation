import './Now_Date.css';

function nowDate(tag) {
  let parent = document.querySelector(tag)
  let dateText = document.createElement('p');
  dateText.classList.add('date__text');
  parent.append(dateText);

  let d = new Date();
  let nowDay = d.getDate();
  let nowMonth = function() {
    let allMonth = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    let x = d.getMonth();
    return allMonth[x];
  }

  let nowYear = d.getFullYear();

  let nowWeekday = function() {
    let allWeekday = [
      'воскресение',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
    ];

    let y = d.getDay();
    return allWeekday[y];
  }

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
  }

  let nowHours = function() {
    let h = d.getHours();
    return h + ' ' + declOfNum(h, ['час', 'часа', 'часов']);
  }

  let nowMinutes = function() {
    let m = d.getMinutes();
    return m + ' ' + declOfNum(m, ['минута', 'минуты', 'минут']);
  }

  let nowSeconds = function() {
    let s = d.getSeconds();
    return s + ' ' + declOfNum(s, ['секунда', 'секунды', 'секунд']);
  }

  function nowFullDate() {
    dateText.textContent = 'Сегодня ' + nowDay + ' ' + nowMonth() + ' ' + nowYear + ' года, ' + nowWeekday() + ', ' + nowHours() + ' ' + nowMinutes() + ' ' + nowSeconds();
    return d = new Date();
  }

  setInterval(nowFullDate, 1000);
}

export {nowDate};