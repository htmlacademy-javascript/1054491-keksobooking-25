import {resetForm} from './form.js';

const ERROR_TIME = 5000;

//Выводим сообщение об ошибке


const showError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = 100;
  errorContainer.style.position = 'absolute';
  errorContainer.style.width = '300px';
  errorContainer.style.right = '50%';
  errorContainer.style.transform = 'translateX(50%)';
  errorContainer.style.top = '55px';

  errorContainer.style.padding = '10px 3px';
  errorContainer.style.fontSize = '12px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = '#ffaa99';

  errorContainer.textContent = message;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  },
  ERROR_TIME);
};

const getData = (onSuccess, count, onError) => () => fetch(
  'https://25.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    data.slice(0, count).forEach((ad) => {
      onSuccess(ad);
    });
  })
  .catch(() => {
    showError(onError);
  });

const sendData = (onSuccess, onError, body) => {
  fetch (
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      resetForm();
    } else {
      onError('Не удалось отправить форму. Пожалуйста, попробуйте еще раз');
    }
  }).catch(() => {
    onError('Не удалось отправить форму. Пожалуйста, попробуйте еще раз');
  });
};

export {getData, sendData, showError};
