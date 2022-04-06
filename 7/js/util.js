function getRandomNumber(min, max) {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  if (min > max) {
    throw new Error('Пожалуйста, поменяйте числа местами');
  } if (min < 0) {
    throw new Error('Пожалуйста, введите положительные значения');
  }
  return Math.round(random);
}

function getRandomCoordinat(min, max, decimalPlaces) {
  if (min > max) {
    throw new Error('Пожалуйста, поменяйте числа местами');
  } if (min < 0) {
    throw new Error('Пожалуйста, введите положительные значения');
  }
  return ((Math.random() * (max - min) + min).toFixed(decimalPlaces));
}

function mixElements(elements) {
  elements.forEach((element, index, items) => {
    const randomIndex = getRandomNumber(0, elements.length - 1);
    const current = items[index];
    items[index] = items[randomIndex];
    items[randomIndex] = current;
  });
  return elements;
}

function getRandomArrayString(elements) {
  return mixElements(elements).slice(0, getRandomNumber(1, elements.length - 1)).join(', ');
}


export {getRandomNumber, getRandomCoordinat, getRandomArrayString};
