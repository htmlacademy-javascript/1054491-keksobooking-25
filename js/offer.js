
const TEMPLATE_FRAGMENT = document.querySelector('#card').content;
const TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.popup');
const PHOTO_TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.popup__photo');
const hideElement = (element) => {element.classList.add('hidden');};
const addValue = (element, value) => {element.innerHTML = value;};


const TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const createOffer = ({offer, author}) => {
  const add = TEMPLATE.cloneNode(true);
  if (offer.title) {
    addValue(add.querySelector('.popup__title'), offer.title);
  } else {
    hideElement(add.querySelector('.popup__title'));
  }

  if (offer.adress) {
    addValue(add.querySelector('.popup__text--address'), offer.adress);
  } else {
    hideElement(add.querySelector('.popup__text--address'));
  }

  if (offer.price) {
    addValue(add.querySelector('.popup__text--price'), `${offer.price} ₽/ночь`);
  } else {
    hideElement(add.querySelector('.popup__text--price'));
  }

  if (offer.type) {
    addValue(add.querySelector('.popup__type'), TYPE[offer.type]);
  } else {
    hideElement(add.querySelector('.popup__type'));
  }

  if (offer.rooms && offer.guests) {
    addValue(add.querySelector('.popup__text--capacity'), `${offer.rooms} комнаты для ${offer.guests} гостей`);
  } else {
    hideElement(add.querySelector('.popup__text--capacity'));
  }

  if (offer.checkin && offer.checkout) {
    addValue(add.querySelector('.popup__text--time'), `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  } else {
    hideElement(add.querySelector('.popup__text--time'));
  }

  if (offer.features) {
    add.querySelectorAll('.popup__feature').forEach((featureItem) => {
      const isNecessary = offer.features.some(
        (feature) => featureItem.classList.contains(`popup__feature--${feature}`)
      );
      if (!isNecessary) {
        featureItem.remove();
      }
    });
  } else {
    hideElement(add.querySelector('.popup__features'));
  }

  if (offer.description) {
    addValue(add.querySelector('.popup__description'), offer.description);
  } else {
    hideElement(add.querySelector('.popup__description'));
  }

  if(offer.photos) {
    add.querySelector('.popup__photos').innerHTML = '';
    offer.photos.forEach( (photo) => {
      const item = PHOTO_TEMPLATE.cloneNode(true);
      item.src = photo;
      add.querySelector('.popup__photos').append(item);
    });
  } else {
    hideElement(add.querySelector('.popup__photos'));
  }

  if (author.avatar) {
    add.querySelector('.popup__avatar').src = author.avatar;
  } else {
    hideElement(add.querySelector('.popup__avatar'));
  }
  return add;
};

export {createOffer};
