const program = require('commander');
const cmd = require('cmd-promise');
const tar = require('tar');
const { commands,mkDir,simpleExecute } = require('./sparc-helpers.js');

program
  .parse(process.argv);

const args = program.args;
const projectName = args.join();

const checkArgs = args => {
    if (!args.length) {
      console.error('A project name is required.');
      process.exit(1);
    } else if (args.length > 1) {
      console.error("Pleased don't use whitespace. Try again.");
      process.exit(1);
    }
};

const createProject = (args,projectName) => {
    checkArgs(args);
    
    // Build Run List
    const runlist = [
        {
            title: 'Add and initialize Git',
            task: ''
        }
    ]
}

createProject(args,projectName);
