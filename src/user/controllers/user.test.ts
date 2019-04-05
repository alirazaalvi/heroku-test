import { Response, ErrorRequestHandler } from 'express';
import knex, { QueryBuilder } from 'knex';
import request from 'supertest';
import server from '../../server';
import * as userService from '../services/user_service';


describe('POST /users', () => {
  const spyOnGetUser = jest.spyOn(userService, 'getUser');
  const spyOnInsertUser = jest.spyOn(userService, 'insertUser');
  const testSignupData = {firstName: 'test', lastName: 'test', email: 'test@gmail.com', password: 'enterhere', confirmPassword: 'enterhere'};
  it('respond with 200 response on successfull signup', (done) => {
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(undefined))));
    spyOnInsertUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(testSignupData))));

    request(server)
      .post('/signup')
      .send(testSignupData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });

  it('throw validation error on invalid request data for signup', (done) => {
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

  it('responds with 400 if signing up user already exists', (done) => {
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve({ firstName: 'test', lastName: 'test', email: 'test@gmail.com'}))));
    request(server)
      .post('/signup')
      .send(testSignupData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });

  it('respond with 400 response if fail to insert user', (done) => {
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(undefined))));
    spyOnInsertUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(undefined))));

    request(server)
      .post('/signup')
      .send(testSignupData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });

  it('throw validation error on invalid request data for login', (done) => {
    request(server)
      .post('/login')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) { return done(err); }
        done();
      });
  });
});
