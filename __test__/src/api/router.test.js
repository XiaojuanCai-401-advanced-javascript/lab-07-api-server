'use strict';

const supergoose = require('@code-fellows/supergoose');
const {server} = require('../../../src/server')

const mockRequest = supergoose(server);

describe('API server', () => {
  it('Response with 404 to invalid route', ()=>{
    return mockRequest
            .get('/fail')
            .then(result => {
              expect(result.status).toEqual(404);
            });
  });
});
