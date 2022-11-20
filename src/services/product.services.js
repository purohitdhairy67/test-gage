import axios from 'axios';

const fetchProducts = () => axios.get('https://run.mocky.io/v3/aa65f3d6-1370-4b4d-8b25-d4881287be4d');

export const productTypeServices = {
  fetchProducts,
};