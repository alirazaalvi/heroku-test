import { Response, ErrorRequestHandler } from 'express';
import knex, { QueryBuilder } from 'knex';
import request from 'supertest';
import server from '../../server';
import * as userService from '../services/user_service';


describe('POST /users', () => {
  it('responds with json', (done) => {
    const spyOnGetUser = jest.spyOn(userService, 'getUser');
    const spyOnInsertUser = jest.spyOn(userService, 'insertUser');
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(undefined))));
    spyOnInsertUser.mockReturnValue(new Promise((resolve, reject ) => (resolve({ firstName: 'test', lastName: 'test', email: 'test@gmail.com'}))));

    request(server)
      .post('/signup')
      .send({firstName: 'test', lastName: 'test', email: 'abc@gmail.com', password: 'enterhere', confirmPassword: 'enterhere'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });
});
