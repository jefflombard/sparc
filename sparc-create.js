#!/usr/bin/env node

const program = require('commander');

program
  .parse(process.argv);

const name = program.args;

if (!name.length) {
  console.error('A project name is required.');
  process.exit(1);
} else if (name.length > 1) {
  console.error("Pleased don't use whitespace. Try again.");
  process.exit(1);
}

console.log(`creating ${name.join()}...`);
