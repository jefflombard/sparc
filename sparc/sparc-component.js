const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program
  .parse(process.argv);

const args = program.args;
const componentName = args.join();

if (!args.length) {
  console.error('A component name is required.');
  process.exit(1);
} else if (args.length > 1) {
  console.error("Pleased don't use whitespace. Try again.");
  process.exit(1);
}

simpleExecute(`sfdx force:lightning:component:create -n ${componentName}`);
