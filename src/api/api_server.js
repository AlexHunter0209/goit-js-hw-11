import axios from 'axios';
export default async function getPixabay(url) {
    const res = await axios.get(url);
    return res;
}

const KEY_PIXABAY = `35768020-57bf980d1d69223dcc2d256cc`;

export default function () {
  return `https://pixabay.com/api/?key=${KEY_PIXABAY}&image_type=photo&orientation=horizontal&safesearch=true&q=${search.value}&page=${search.page}&per_page=${search.per_page}`;
}