import { expect, test } from '@jest/globals';
import app from '../src/server/app.js';
import request from 'supertest';

test('Returns 404 and error page for pages that does not exist.', async () => {
  const noPaths = ['/this-site-does-not-exist', '/about/thisshouldnotexist', '/we-sell-cars-not-movies'];

  for (const path of noPaths) {
    const response = await request(app).get(path).expect('Content-Type', /html/).expect(404);

    expect(response.text).toMatch('404 - Sidan kunde inte hittas');
    expect(response.text).toMatch('Sidan kunde inte hittas');
    expect(response.text).toMatch('Tillbaka till startsidan');
    expect(response.text).toMatch('href="/"');
  }
});
