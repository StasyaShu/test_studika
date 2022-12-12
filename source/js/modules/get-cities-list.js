import {URL_POST} from './data';

const getData = () => {
  fetch(URL_POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      const regions = result;
      const cities = regions.map((el) => el.cities);
      console.log(cities) // проверка полученных данных по названиям городов
    })
    .catch((error) => console.log(error.message));
};

export {getData};
