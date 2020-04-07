import axios from 'axios';

export const getTopTracks = (url) => axios.get(url);

const apis = {
  getTopTracks
}

export default apis;