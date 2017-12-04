const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');
// const { execute }= require('helpers');

program
  .parse(process.argv);

const args = program.args;
const auth = (alias) => {
    const commandString = alias ? "":"";
    exec()

};

if (!args.length) {
    return auth();
} else if (args.length > 1) {
    console.log('Please do not use a space in your alias name.');
    return;
}

const alias = args.join();

console.log()





// } else {
//     const alias = args.join();

// }
