import { expect, test } from '@jest/globals';
import app from '../src/server/app.js';
import request from 'supertest';

test('Home page shows a list of movies', async () => {
  const response = await request(app).get('/movies').expect('Content-Type', /html/).expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('Forrest Gump');
  expect(response.text).toMatch('Training Day');
});
