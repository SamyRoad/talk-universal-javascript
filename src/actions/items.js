/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

export const toggleLike = id => ({
  type: 'TOGGLE_LIKE',
  id,
});

const receiveItems = items => ({
  type: 'RECEIVE_ITEMS',
  items,
});

export const fetchItems = () => dispatch =>
  fetch('http://localhost:4000/items') // eslint-disable-line no-undef
    .then(response => response.json())
    .then(items => dispatch(receiveItems(items)))
  ;
