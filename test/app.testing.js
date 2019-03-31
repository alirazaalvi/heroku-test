// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../app');

// const should = chai.should();

// chai.use(chaiHttp);

// /*
//   * Test the hotels /GET route
// */
// describe('/ Index page', () => {
//   it('it should GET empty response', (done) => {
//     chai.request(server)
//       .get('/')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });

// /*
//   * Test the hotels /GET route
// */
// describe('/GET users', () => {
//   it('it should GET all the users', (done) => {
//     chai.request(server)
//       .get('/users')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//         res.body.length.should.be.above(0);
//         done();
//       });
//   });
// });
