'use strict';

const { server } = require('../../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('web server', () => {

  it('Should respond with a 404 on an error', () => {

    return mockRequest
      .get('/fail')
      .then(result => {
        expect(result.status).toBe(404);
      }).catch(console.error);

  });

  it('Should respond properly on GET request to /products', ()=>{
    return mockRequest
            .get('/api/v2/products')
            .then(result => {
              expect(result.status).toBe(200);
            })
            .catch(console.error);
  });

  it('Should respond properly on POST request to /products', () => {
    return mockRequest
      .post('/api/v2/products')
      .send({name:"doorlock", categoryId:"xyz", display_name:"doorlock"})
      .then(result => {
        expect(result.status).toBe(201);
      })
      .catch(console.error);
  })
});

