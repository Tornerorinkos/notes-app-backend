/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // server.state('data', {
  //   ttl: null,
  //   isSecure: true,
  //   isHttpOnly: true,
  //   encoding: 'base64json',
  //   clearInvalid: true,
  //   strictHeader: false,
  // });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
