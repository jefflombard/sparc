const program = require('commander');
const Listr = require('listr');
const execa = require('execa');
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
    const runlist = new Listr([
        {
            title: 'Test Command',
            task: () => execa.stdout('echo', ['test'])
        }
    ])

    return runlist.run().catch(err => console.error(err))
}

createProject(args,projectName);
