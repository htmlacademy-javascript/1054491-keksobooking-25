function getRandomNumber(min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  if (min > max) {
    throw new SyntaxError('Пожалуйста, поменяйте числа местами');
  } if (min < 0) {
    throw new SyntaxError('Пожалуйста, введите положительные значения');
  }
  return Math.round(random);
}


function getRandomCoordinat(min, max, decimalPlaces) {
  if (min > max) {
    throw new SyntaxError('Пожалуйста, поменяйте числа местами');
  } if (min < 0) {
    throw new SyntaxError('Пожалуйста, введите положительные значения');
  }
  return ((Math.random() * (max - min) + min).toFixed(decimalPlaces));
}


getRandomNumber(4, 10);
getRandomCoordinat(-2.1, 2.4, 2);
