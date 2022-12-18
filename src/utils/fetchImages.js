import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API = '30790511-0058a7b32e06c419542f9f14e';

export async function fetchImages(page, keyword) {

  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API,
      q: keyword,
      per_page: 12,
      page,
    },
  });
  console.log(response.data)
 }