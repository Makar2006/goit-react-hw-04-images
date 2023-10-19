import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39114090-cdcc660baf671d3fbbda6673c';

const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchImages;
