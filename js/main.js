function getRandomNumber(min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  if (min===max || min > max || min < 0) {
    return 'Введите другое значение';
  }
  return Math.round(random);
}


function getRandomCoordinat(min, max, decimalPlaces) {
  if (min===max || min > max || min < 0) {
    return ('Введите другое значение');
  }
  return ((Math.random() * (max - min) + min).toFixed(decimalPlaces));
}


getRandomNumber(0, 10);
getRandomCoordinat(2.2, 2.1, 5);
