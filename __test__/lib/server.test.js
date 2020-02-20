'use strict';

const { server } = require('../../src/server.js.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 500 on an error', () => {

    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /authors', () => {

    return mockRequest
      .get('/authors')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  // What strategies should we use to test POST, PUT, DELETE?
  it('should respond properly on DELETE request to /authors/:id', () => {

    return mockRequest
      .delete('/authors/1')
      .then(results => {
        expect(results.status).toBe(202);
      }).catch(console.error);

  });
});
