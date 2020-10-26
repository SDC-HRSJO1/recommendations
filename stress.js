/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-mutable-exports */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 1000 },
    { duration: '6m', target: 1000 },
    { duration: '1m', target: 0 },
  ],
};

export default () => {
  http.get('http://localhost:1234/5591210');
  sleep(1);
};
