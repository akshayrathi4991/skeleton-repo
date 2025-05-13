import request from 'supertest';
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, {{name}}!');
});

describe('GET /', () => {
  it('should return a greeting message', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, {{name}}!');
  });
});
