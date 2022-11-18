const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('t', {
    alias: 'to',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: 'Hasta qué número se multiplica'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .argv;

module.exports = argv;