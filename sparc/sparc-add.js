const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program.on('--help', function(){
  console.log(`
  Add multiple add-ons at once:

    You can add multiple packages at once. e.g. 'sparc add git redux'

  Available add-ons:

    git      adds git to the current project by running git init
    redux    installs redux and adds a provider component as described in Lightning-Redux
      `)
});

program
  .parse(process.argv);

const args = program.args;

if (!args.length) {
  console.error('A project name is required.');
  process.exit(1);
}

args.forEach((arg)=>{
    switch (arg) {
        case "git":
            simpleExecute('git init');
            break;
        default:
            return;
    }
});
