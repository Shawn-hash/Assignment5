import axios from 'axios';

const url = 'https://inventory-backend-y41k.onrender.com/cards';

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (name, updatedCard) => axios.patch(`${url}/${name}`, updatedCard);
export const deleteCard = (name) => axios.delete(`${url}/${name}`)
