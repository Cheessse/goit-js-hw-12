import axios from 'axios';

export async function fetchArticles(query) {
  const API_KEY = '42276910-5dbc0617c597b0712888fd711';
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const res = axios.get(url, { params });
  return res.data;
}
