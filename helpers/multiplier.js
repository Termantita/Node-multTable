const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, limit = 10) => {
  console.clear();
  fileName = `tabla-${base}-${limit}.txt`;
  
  let output, rawOutput = '';
  output, rawOutput += `
******************************** 
  Table of ${base} to ${limit}
********************************\n`;
  for (let i = 1; i <= limit; i++) {
    output += `${base} ${'*'.cyan} ${colors.red(i)} ${'='.cyan} ${colors.green(base * i)}\n`;
    rawOutput += `${base} * ${i} = ${base * i}\n`;
  }
  if (list) {
    console.log(`
------------------------
  Tabla del: ${colors.green(base)}
------------------------`);
    console.log(output);
  }

  try {
    fs.writeFileSync(`tables/${fileName}`, rawOutput);
  } catch (err) {
    throw 'No se pudo crear el archivo';
  }

  return fileName;
}

module.exports = {
  createFile: createFile
}