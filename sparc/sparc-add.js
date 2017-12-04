#!/usr/bin/env node

const program = require('commander');

program
  .parse(process.argv);

const args = program.args;

if (!args.length) {
  console.error('A project name is required.');
  process.exit(1);
}

args.forEach(()=>{});

console.log(`adding ${args.join()}...`);
