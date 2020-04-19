import axios from 'axios';
import API_KEY from './key';

export const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`;

export const getTopTracks = (url) => axios.get(url);

const apis = {
  getTopTracks
}

export default apis;