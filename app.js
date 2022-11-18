const { createFile } = require('./helpers/multiplier');
const argv = require('./config/yargs');

require('colors');

console.clear();

console.log(argv);

// const [, , base = '', limit = ''] = process.argv;

createFile(argv.b, argv.l, argv.t)
  .then(fileName => console.log(`${fileName.bgGreen} creado`))
  .catch(console.log)
