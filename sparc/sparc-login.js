const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program
  .parse(process.argv);

const args = program.args;
const alias = args.join();
const auth = (alias) => {
    const base = "sfdx force:auth:web:login";
    const flags = "-d"
    const commandString = alias ? `${base} ${flags} -a ${alias}` : `${base} ${flags}`;
    simpleExecute(commandString);
};

if (!args.length) {
    return auth();
} else if (args.length > 1) {
    console.log('Please do not use a space in your alias name.');
    process.exit(1);
}

auth(alias);
