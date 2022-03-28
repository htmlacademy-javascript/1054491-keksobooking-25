import {ads} from './data.js';
import {createOffer} from './offer.js';
import './util.js';

const fragment = document.createDocumentFragment();

ads.forEach((offer) => fragment.append(createOffer(offer)));
document.querySelector('#map-canvas').append(fragment);
