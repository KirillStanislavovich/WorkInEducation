import './text_edit.css';

function textEditor(){
  let textBlock = document.querySelector('.text-editor__text');

  let btnEdit = document.querySelector('.btn-1');
  let btnSave = document.querySelector('.btn-2');
  let btnCancel = document.querySelector('.btn-3');
  let btnGo = document.querySelector('.btn-4');

  let select = document.querySelector('.select');
  let option = select.innerHTML;
  let text = textBlock.innerHTML;
  const data = localStorage.getItem('myText') ? JSON.parse(localStorage.getItem('myText')) : [];
  let options;

  getOfLocal();
  getOptionLocal();

  function saveToLocal() {
    if (data.length === 5) {
      data.splice(0, 1)
    }
    text = textBlock.innerHTML;
    let date = nowDate();
    data.push([date, text]);
    localStorage.setItem('myText', JSON.stringify(data));
    addToSelect(date);
    saveOptionLocal();
  }

  function getOfLocal() {
    let data = JSON.parse(localStorage.getItem('myText'));
    if (data) {
      text = data[data.length - 1][1];
    }
    textBlock.innerHTML = text;
  }

  function saveOptionLocal() {
    options = select.innerHTML;
    localStorage.setItem('myOptions', JSON.stringify(options));
  }

  function getOptionLocal() {
    let options = JSON.parse(localStorage.getItem('myOptions'));
    if (options) {
      select.insertAdjacentHTML("afterbegin", options);
    }
    options = select.innerHTML;
  }

  function getOfLocalSelect(date) {
    let data = JSON.parse(localStorage.getItem('myText'));
    let selectValue = data.find(item => item[0] === date);
    text = selectValue[1];
    textBlock.innerHTML = selectValue[1];
  }

  function addToSelect(param) {
    if (select.querySelectorAll('option').length === 5) {
      select.querySelector('option').remove();
    }
    let newOption = document.createElement('option');
    newOption.classList.add('select__item');
    newOption.setAttribute('value', param);
    newOption.innerHTML = `${param}`;
    select.append(newOption);
  }

  function nowDate() {
    let d = new Date();
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}-${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  btnEdit.addEventListener('click', () => {
    textBlock.setAttribute('contenteditable', 'true');
    btnEdit.setAttribute('disabled', '');
    btnSave.removeAttribute('disabled');
    btnCancel.removeAttribute('disabled');
  });

  btnSave.addEventListener('click', () => {
    saveToLocal();
    saveOptionLocal();
    textBlock.setAttribute('contenteditable', 'false');
    btnEdit.removeAttribute('disabled');
    btnSave.setAttribute('disabled', '');
    btnCancel.setAttribute('disabled', '');
  });

  btnCancel.addEventListener('click', () => {
    getOfLocal();
    textBlock.setAttribute('contenteditable', 'false');
    btnEdit.removeAttribute('disabled');
    btnSave.setAttribute('disabled', '');
    btnCancel.setAttribute('disabled', '');
  });

  btnGo.addEventListener('click', () => {
    let keyLocal = select.value;
    getOfLocalSelect(keyLocal);
  });
}

export {textEditor};