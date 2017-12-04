const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program
  .parse(process.argv);

const args = program.args;
const className = args.join();

if (!args.length) {
  console.error('A project name is required.');
  process.exit(1);
} else if (args.length > 1) {
  console.error("Pleased don't use whitespace. Try again.");
  process.exit(1);
}

simpleExecute(`sfdx force:apex:class:create -n ${className}`);
