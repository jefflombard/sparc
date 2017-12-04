const program = require('commander');
const tar = require('tar');
const ora = require('ora');
const { commands,mkDir,simpleExecute } = require('./sparc-helpers.js');

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

const createProject = projectName => {
    const spinner = ora('Creating Project').start();

    // Pseudo Loading... it's a feature!
    setTimeout(() => {
    	spinner.color = 'yellow';
    	spinner.text = 'Almost done!';
    }, 3000);
    setTimeout(() => {
        spinner.succeed('Finishing!');
    }, 6000);

    const runlist = [
        commands.createSFDX(projectName),
        commands.addGit(projectName),
        commands.addNPM(projectName),
        // commands.addRedux(projectName),
        commands.initialCommit(projectName)
    ];
    const generatedCommand = runlist.join(' && ');
    simpleExecute(generatedCommand);

    // need to add in the redux component files
    // need to add in appropriate npm scripts for redux and flow

};

createProject(projectName);
