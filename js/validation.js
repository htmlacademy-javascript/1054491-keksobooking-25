const form = document.querySelector('.ad-form');
const price = document.querySelector('#price');
const rooms = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');
const houseType = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


const typePrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-message'
});

const validatePrice = () => price.value >= typePrice[houseType.value];
const getErrorPriceMessage = () => `Минимальная цена должна быть больше ${typePrice[houseType.value]}`;
const validateRoomsAndGuests = () => Number(guests.value) <= Number(rooms.value) && Number(rooms.value) !== 100 && Number(guests.value) !== 0 || Number(rooms.value) === 100 && Number(guests.value) === 0;

pristine.addValidator(price, validatePrice, getErrorPriceMessage);
pristine.addValidator(guests, validateRoomsAndGuests, 'Количество гостей не должно превышать количество комнат');
pristine.addValidator(rooms, validateRoomsAndGuests, 'Количество гостей не должно превышать количество комнат');

houseType.addEventListener('change', () => {
  price.placeholder = typePrice[houseType.value];
  price.min = typePrice[houseType.value];
});

const getDependenceTimeOut = (timeOfEntry, checkOutTime) => {
  checkOutTime.value = timeOfEntry.value;
};

timeIn.addEventListener('change', () => {
  getDependenceTimeOut(timeIn,timeOut);
});

timeOut.addEventListener('change', () => {
  getDependenceTimeOut(timeOut, timeIn);
});

form.addEventListener('submit', (evt) => {
  if(pristine.validate()) {
    return true;
  }
  evt.preventDefault();
});

