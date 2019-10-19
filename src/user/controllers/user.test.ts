
import { Response, ErrorRequestHandler } from 'express';
import knex, { QueryBuilder } from 'knex';
import request from 'supertest';
import server from '../../server';
import { UserViewModel } from './../models/user_model';
import * as userService from '../services/user_service';

describe('POST /users', () => {
  const spyOnGetUser = jest.spyOn(userService, 'getUser');
  const spyOnInsertUser = jest.spyOn(userService, 'insertUser');

  const testUserData = {
    firstName: 'test',
    lastName: 'test',
    email: 'test@gmail.com',
    password: 'enterhere',
    confirmPassword: 'enterhere',
    role: 1,
  };

  it('respond with 200 response on successfull signup', (done) => {

    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(undefined))));
    spyOnInsertUser.mockReturnValue(new Promise((resolve, reject ) => (resolve([1]))));

    request(server)
      .post('/api/signup')
      .send(testUserData)
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
      .post('/api/signup')
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
    spyOnGetUser.mockReturnValue(new Promise((resolve, reject ) => (resolve(testUserData))));
    request(server)
      .post('/api/signup')
      .send(testUserData)
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
      .post('/api/signup')
      .send(testUserData)
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
      .post('/api/login')
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
