// empece con la api de youtube pero al tiemp me indico
// que para mas peticiones debia de porner la tarjeta de credito
// dejo este archivo para demostrar como lo haria con axios
// aunque haya decidido hacer la peticiones con RTK query y redux-toolkit
// al pensar que es un gestor de estado mas usado para React
// aunque si hubiera un compoente que solo necesita hacer la peticion
// y no compartir esa data con ningun otro componente lo haria con axios o fetch
// y de esta manera no recargar la store de Redux-toolkit

import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const videosApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

async function searchVideos(query) {
  const params = {
    part: 'snippet',
    q: query,
    key: API_KEY,
    type: 'video',
    maxResults: 10,
  };

  try {
    const response = await videosApi.get('/search', { params });
    const { data } = response
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default searchVideos;
