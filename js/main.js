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

getRandomCoordinat(2.1, 2.4, 2);

const ADS_COUNT = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const DESCRIPTIONS = ['Светлое и просторное помещение', 'Локанично и стильно', 'Отличный вариант для путешественников с питомцами', 'Ярко и оригинально'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LAT_START = 35.65000;
const LAT_END = 35.70000;
const LNG_START = 139.70000;
const LNG_END = 139.80000;
const PRICE_MAX = 10000;
const ads = [];

for (let i = 1; i <= ADS_COUNT; i++ ) {
  const {lat,lng} = {
    lat: getRandomCoordinat(LAT_START, LAT_END, 5),
    lng: getRandomCoordinat(LNG_START, LNG_END, 5) };

  const ad = {
    author: {
      avatar: `img/avatars/user${i.toString().padStart(2, '0')}.png`
    },
    offer: {
      title: `Отель ${i}`,
      address: `${lat},${lng}`,
      price: getRandomNumber(0, PRICE_MAX),
      type: TYPES[getRandomNumber(0, TYPES.length - 1)],
      rooms: getRandomNumber(0, 7),
      guests: getRandomNumber(0, 15),
      checkin: TIME[getRandomNumber(0, TIME.length - 1)],
      checkout: TIME[getRandomNumber(0, TIME.length - 1)],
      features: getRandomArrayString(FEATURES),
      photos: getRandomArrayString(PHOTOS),
      description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)]
    },
    location: {
      lat,
      lng
    }
  };
  ads.push(ad);
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

console.log(ads);
