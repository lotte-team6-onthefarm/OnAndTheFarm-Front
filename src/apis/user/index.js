import axios from 'axios';

const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN =
  'fqaU9SQpQ495n-tAuhj0QJAJcJniCqlHlc4ArkWqxtccwV0unmoG41vDh7Rl1ARGtuJmbAo9dNoAAAGDpplv5w';
const JWTapiUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

const ApiUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
  },
});

export { JWTapiUser, ApiUser };
