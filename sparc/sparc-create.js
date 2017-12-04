const program = require('commander');
const tar = require('tar');

program
  .parse(process.argv);

const args = program.args;
const projectName = args.join();

if (!args.length) {
  console.error('A project name is required.');
  process.exit(1);
} else if (args.length > 1) {
  console.error("Pleased don't use whitespace. Try again.");
  process.exit(1);
}

// Extract tar into the current directory and set name
