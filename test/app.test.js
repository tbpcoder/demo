const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
  it('responds with 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('System Time Check', () => {
  it('Checks for the time coherence', () => {
    const actualTime = new Date();
    const systemTime = req.Date;
    expect(actualTime.toString()).toEqual(systemTime.toString());
  });
});


