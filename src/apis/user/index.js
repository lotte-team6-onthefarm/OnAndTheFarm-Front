import axios from 'axios';

const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN =
"eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjMsImlhdCI6MTY2NDk1MDUwMiwiZXhwIjoxNjY1MDM2OTAyfQ.IVnJxdou_wrJvW9eGv1wszmOBXyIY2KFWTWSnDyXdH0iYXmh6CvptazH_VmkrYxomcO8SNzTWn1582g9pB9IkA";
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
