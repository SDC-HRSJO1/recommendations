/* eslint-disable import/no-mutable-exports */
import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    // { duration: '2m', target: 100 }, // below normal load
    // { duration: '5m', target: 100 },
    // { duration: '2m', target: 200 }, // normal load
    // { duration: '5m', target: 200 },
    // { duration: '2m', target: 300 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    // { duration: '10m', target: 0 }, // scale down. Recovery stage.
    { duration: '1m', target: 1000 },
    { duration: '6m', target: 1000 },
    { duration: '1m', target: 0 },
    // { duration: ‘1m’, target: 1 }, // below normal load
    // { duration: ‘2m’, target: 1 },
    // { duration: ‘1m’, target: 10 },
    // { duration: ‘2m’, target: 10 },
    // { duration: ‘1m’, target: 100 },
    // { duration: ‘2m’, target: 100 },
    // { duration: ‘1m’, target: 1000 },
    // { duration: ‘2m’, target: 1000 },
    // { duration: ‘2m’, target: 0 },
  ],
};

export default function () {
  const responses = http.get('http://localhost:1234/9888555/');
  sleep(1);
  // const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

  // let responses = http.batch([
  //   [
  //     'GET',
  //     `${BASE_URL}/public/crocodiles/1/`,
  //     null,
  //     { tags: { name: 'PublicCrocs' } },
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/public/crocodiles/2/`,
  //     null,
  //     { tags: { name: 'PublicCrocs' } },
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/public/crocodiles/3/`,
  //     null,
  //     { tags: { name: 'PublicCrocs' } },
  //   ],
  //   [
  //     'GET',
  //     `${BASE_URL}/public/crocodiles/4/`,
  //     null,
  //     { tags: { name: 'PublicCrocs' } },
  //   ],
  // ]);

  // sleep(1);
}
