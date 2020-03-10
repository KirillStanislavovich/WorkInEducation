import './trans.css';

function yanTrans() {
  const apiKey = '?key=' + 'trnsl.1.1.20200302T172549Z.ee7b04aaac291f3d.4e8f2ea31c3d2b9ec9952c914a6245124b334535';

  let userText = document.querySelector('.form__input');
  let firstLang = document.querySelector('#firstLang');
  let secondLang = document.querySelector('#secondLang');
  let result = document.querySelector('.result');

  let btn = document.querySelector('.form__send');

  btn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    let text = `&text=${userText.value}`;
    let lang = `&lang=${firstLang.value}-${secondLang.value}`;
    url += apiKey;
    url += text;
    url += lang;

    fetch(url)
      .then(function(response) {
        if (response.status !== 200 && response.status !== 422) {
          throw new Error('Произошла ошибка при получении ответа от сервера:\n\n' + response.statusText);
        } else if (response.status === 422) {
          throw new Error('К сожалению, перевод для данного слова не найден');
        } else {
          return response.json();
        }
      })
      .then(function(data) {
        result.innerHTML = data.text[0];
      })
      .catch(function(error) {
        result.innerHTML = error;
      })
      .finally(function() {
        userText.innerHTML = '';
      })
  });
}

export {yanTrans};