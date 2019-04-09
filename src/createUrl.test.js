'use strict';

const createUrl = require('./createUrl');

test('Create URL with 2 params', () => {
  expect(createUrl(
    'http://localhost:3000/api/countries/{country}/regions/{region}/',
    { country: 'Ukraine', region: 'Kiev' }
  ))
    .toBe('http://localhost:3000/api/countries/Ukraine/regions/Kiev/');
});

test('Create URL with 2 params', () => {
  expect(createUrl(
    '/api/{list}/{id}', { list: 'public/items', id: 0 }
  ))
    .toBe('/api/public/items/0');
});

test('Create URL with 3 params', () => {
  expect(createUrl(
    '/api/{user}/{params}/{social}',
    { user: 'Petya', params: 'public/params', social: 'facebook' }
  ))
    .toBe('/api/Petya/public/params/facebook');
});

test('Create URL with 5 params', () => {
  expect(createUrl(
    '/api/{a}/{b}/{c}/{d}/{e}', { a: 1, b: 2, c: 3, d: 4, e: 5 }
  ))
    .toBe('/api/1/2/3/4/5');
});
