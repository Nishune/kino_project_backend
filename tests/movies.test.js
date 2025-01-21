import { expect, test } from '@jest/globals';
import app from '../src/server/app.js';
import request from 'supertest';
test('Home page shows a list of movies', async () => {
  await request(app).get('/').expect('Content-Type', /html/).expect(200);
});
