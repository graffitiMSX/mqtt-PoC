const mosca = require('mosca');
const { settings } = require('../config/config');
const _port = settings._port;
const brokerSettings = { port: _port };

const broker = new mosca.Server(brokerSettings);

broker.on('ready', () => {
  console.log(`Broker ready at port ${_port}`);
});
