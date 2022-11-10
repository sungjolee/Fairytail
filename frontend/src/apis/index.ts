import axios from 'axios';

const BASE_URL = 'https://k7c209.p.ssafy.io';

export const API_INTRO = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

export const API_AUTH = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.token,
  },
});

export const API_FILE = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.token,
    'Content-Type': 'multipart/form-data',
  },
});

export const checkType = (type: number) => {
  switch (type) {
    case 0:
      return 'text';

    case 1:
      return 'img';

    case 2:
      return 'video';

    case 3:
      return 'audio';
  }
};

export interface Location {
  lat: number;
  lng: number;
}
