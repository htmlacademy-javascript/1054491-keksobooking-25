const AD_FORM = document.querySelector('.ad-form');
const MAP_FILTERS = document.querySelector('.map__filters');

const toggleClass = (element, className, value) => {
  element.classList.toggle(className, value);
};

const toggleFormElement = (formElements, value) => {
  formElements.forEach((element) => {
    element.disabled = value;
  });
};

const toggleAdForm = (value) => {
  toggleClass(AD_FORM, 'ad-form--disabled', value);
  toggleFormElement(AD_FORM.querySelectorAll('fieldset'), value);
};

const toggleFiltersForm = (value) => {
  toggleClass(MAP_FILTERS,'map__filters--disabled', value);
  toggleFormElement(MAP_FILTERS.querySelectorAll('select, .map__features'), value);
};

const getDisableForm = () => {
  toggleAdForm(true);
  toggleFiltersForm(true);
};

const getActiveForm = () => {
  toggleAdForm(false);
  toggleFiltersForm(false);
};

export {getDisableForm, getActiveForm};

