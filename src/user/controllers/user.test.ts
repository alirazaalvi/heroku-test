import { Response, ErrorRequestHandler } from 'express';
import knex, { QueryBuilder } from 'knex';
import request from 'supertest';
import server from '../../server';
import * as userService from '../services/user_service';


describe('POST /users', () => {
  it('respond with 200 response', (done) => {
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

  it('throw validation error on invalid request data', (done) => {
    request(server)
      .post('/signup')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });

  it('responds with 400 if user exists', (done) => {
    const spyOnGetUser = jest.spyOn(userService, 'getUser');
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve({ firstName: 'test', lastName: 'test', email: 'test@gmail.com'}))));

    request(server)
      .post('/signup')
      .send({firstName: 'test', lastName: 'test', email: 'test@gmail.com', password: 'enterhere', confirmPassword: 'enterhere'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });
});
