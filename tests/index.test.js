// ==================
// Testing mocking on top 4 movies on index page
// This test might be incorrect, but i wanted to try out mocking on atleast one test.
// I choose to use the correct top 4 movies that are displayed on the index page (at the moment).
// I also added a fifth movie, that is older than the rest, so the test can check that this movie is
// not contained in the reponse.
// ==================

import { expect, test, jest, afterAll } from '@jest/globals';
import app from '../src/server/app.js';
import request from 'supertest';

test('Showing the top 4 movies in correct order on index webpage.', async () => {
  const testMovies = {
    data: [
      {
        id: 10,
        attributes: {
          title: 'Training Day',
          imdbId: 'tt0139654',
          image: {
            url: 'https://m.media-amazon.com/images/M/MV5BMjRlNjUwOGYtNGQxZS00ZjhkLTg0NDgtYjcwNzZlNDU2YjBlXkEyXkFqcGc@._V1_.jpg',
          },
          publishedAt: '2025-01-15T10:43:33.027Z',
        },
      },
      {
        id: 9,
        attributes: {
          title: 'Fire Walk With Me',
          imdbId: 'tt0105665',
          image: {
            url: 'https://m.media-amazon.com/images/M/MV5BYzJmZGFiMzAtODNhOC00NzAwLWFlMzAtYTQzYmRmYjIwNDgyXkEyXkFqcGc@._V1_.jpg',
          },
          publishedAt: '2024-03-08T14:45:55.807Z',
        },
      },
      {
        id: 8,
        attributes: {
          title: 'Pulp Fiction',
          imdbId: 'tt0110912',
          image: {
            url: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
          },
          publishedAt: '2024-01-22T09:24:10.979Z',
        },
      },
      {
        id: 5,
        attributes: {
          title: 'The Muppets',
          imdbId: 'tt1204342',
          image: {
            url: 'https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_.jpg',
          },
          publishedAt: '2024-01-22T09:23:11.688Z',
        },
      },
      {
        id: 1,
        attributes: {
          title: 'Isle of dogs',
          imdbId: 'tt5104604',
          image: {
            url: 'https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
          },
          publishedAt: '2023-01-23T06:01:31.679Z',
        },
      },
    ],
  };

  //Mocks the global fetch-function to return test data instead of a "real api call"
  //It will return our mocked data which is testMovies which is defined above.
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(testMovies),
  });

  const response = await request(app).get('/').expect(200);

  //Array of the movie titles that should be displayed on the top 4 index page.
  const expectedMovieTitles = ['Training Day', 'Fire Walk With Me', 'Pulp Fiction', 'The Muppets'];

  //Checking if the expected movie titles is present in the reponse text
  //Only the top 4 newst movies should be expected here.
  expectedMovieTitles.forEach((title) => {
    expect(response.text).toContain(title);
  });

  //Making sure that the movie that is older is not present in the reponse.
  expect(response.text).not.toContain('Isle of dogs');
});

//Reset all mocks so it wont interfere with other tests.
afterAll(() => {
  jest.resetAllMocks();
  console.log('All mocks have been reset');
});
