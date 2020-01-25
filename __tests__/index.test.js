import { request } from './helpers';

describe('Tests with Auth Routing', () => {
  it('Login Student', async done => {
    const response = await request.post('/');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('msg');
    done();
  });
  it('Login Student', async done => {
    const response = await request.post('/').send({
      name: 'Paulo',
    });
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('msg');
    done();
  });
});
