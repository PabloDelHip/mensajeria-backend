
// const app = require('../../../../index');
// const databaseInstance = require('../../../config/database');
// const frisby = require('frisby');
// const request = 'http://localhost:3000';

// const server = app.listen();
// const LoginSucces = {
//   email: 'pablodelhip2@gmail.com',
//   password: '12345678',
// };

// it('Login for users', async() => {
//   return frisby
//       .post(`${request}/auth/login`, LoginSucces)
//       .expect('status', 200)
//       .expect('header', 'Content-Type', 'application/json; charset=utf-8')
//       .then((res) => {
//         let body = JSON.parse(res.body);
//         body = body.data;
//         expect(body.password).not.toBeDefined();
//       });
// });

// it('Recover password', async() => {
//   return frisby
//       .post(`${request}/auth/recover-password`, { email: LoginSucces.email })
//       .expect('status', 200)
//       .expect('header', 'Content-Type', 'application/json; charset=utf-8')
//       .then((res) => {
//         let body = JSON.parse(res.body);
//         body = body.data;
//         expect(body.message).toBeDefined();
//         expect(body.message).toEqual('email sent successfully');
//       });
// });


// afterAll(() => {
//   databaseInstance.close();
//   server.close();
// });
