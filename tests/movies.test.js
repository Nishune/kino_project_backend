import { expect, test } from '@jest/globals';
import app from '../src/server/app.js';
import request from 'supertest';

// ==================
// Testing "All movies-page" so it shows all movies with correct title
// ==================

test('All movies page shows a list of movies', async () => {
  const response = await request(app).get('/movies').expect('Content-Type', /html/).expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('Forrest Gump');
  expect(response.text).toMatch('Training Day');
  expect(response.text).toMatch('The Muppets');
  expect(response.text).toMatch('The Shawshank Redemption');
  expect(response.text).toMatch('Min granne Totoro');
  expect(response.text).toMatch('Isle of dogs');
  expect(response.text).toMatch('Fire Walk With Me');
  expect(response.text).toMatch('Pulp Fiction');
});

// ==================
// Testing individual movies, when they are clicked on that they also show the title.
// ==================

test('Individual movie page shows correct title', async () => {
  const movieTests = [
    { id: 2, title: 'Encanto' },
    { id: 6, title: 'Forrest Gump' },
    { id: 10, title: 'Training Day' },
  ];

  for (const movie of movieTests) {
    const response = await request(app).get(`/movies/${movie.id}`).expect('Content-Type', /html/).expect(200);

    expect(response.text).toMatch(movie.title);
  }
});

// ==================
// Testing the error page for movie id that does not exist.
// ==================

test('Returns 404 and error page for non-existent movie ID', async () => {
  const invalidIds = ['abc', 'xOn', '!+$']; // using this instead of numbers, since the number of movies could grow overtime.

  for (const id of invalidIds) {
    const response = await request(app).get(`/movies/${id}`).expect('Content-Type', /html/).expect(404);

    expect(response.text).toMatch('404 - Filmen kunde inte hittas');
    expect(response.text).toMatch('Filmen du sökte efter finns inte');
    expect(response.text).toMatch('Tillbaka till startsidan');
    expect(response.text).toMatch('href="/"');
  }
});
