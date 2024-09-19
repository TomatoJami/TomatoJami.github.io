'use strict';

const inputEur = document.querySelector('#eur'),
      inputUsd = document.querySelector('#usd'),
      inputRub = document.querySelector('#rub');

      inputEur.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    if (isNaN(inputEur.value)) {
      inputUsd.value = "Enter number";
      inputRub.value = "Enter number";
      return;
    }

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputEur.value * data.current.usd).toFixed(2);
        inputRub.value = (+inputEur.value * data.current.rub).toFixed(2);
      } else {
        inputUsd.value = 'Что то пошло не так'
        inputRub.value = 'Что то пошло не так'
      }

    });
  })