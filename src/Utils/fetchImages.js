const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const API = '30790511-0058a7b32e06c419542f9f14e';

export async function fetchImages(page, keyword) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API,
      q: keyword,
      image_type: 'photo',
      per_page: 12,
      page,
    },
  });
}



