import './code.css';

function codeCheck() {
  
  let checkBtn = document.getElementById('btn');

  let clearBtn = document.getElementById('btn-clear');

  let userCode = document.querySelector('.input-code');

  function showError(a) {
    userCode.classList.add("error");
    alert(`Ошибка: ${a}`);
  }

  checkBtn.onclick = () => {
    'use strict'
    if (userCode.value === '') {
      alert(`Вы ничего не ввели`);
      return;
    };
    try {
      eval(userCode.value);
      alert(`Ваш код правильный!`);
    } catch (ex) {
      showError(ex);
    }
  }

  clearBtn.onclick = () => {
    userCode.value = '';
    userCode.classList.remove("error");
  }

}

export {codeCheck};