const program = require('commander');
const Listr = require('listr');
const Command = require('command-promise');
const { commands,mkDir,simpleExecute } = require('./sparc-helpers.js');

program
  .option('-y, --yes', 'adds all suggested packages.')
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
            title: 'Creating SFDX Project',
            task: () => Command('sfdx','force:project:create','-n',projectName)
        },
        {
            title: 'Initializing Git',
            task: () => Command('cd',projectName,'&&','git','init')
        },
        {
            title: 'Initializing NPM',
            task: () => Command('cd',projectName,'&&','npm init -y')
        }
    ])

    if(program.yes){
        // add additional runlist steps
        console.log('test!')
    }

    return runlist.run().catch(err => console.error(err))
}

createProject(args,projectName);
