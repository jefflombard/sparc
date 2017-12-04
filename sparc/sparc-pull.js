const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program
  .option('-f, --force', 'ignores metadata conflicts')
  .parse(process.argv);

if (program.force){
    simpleExecute('sfdx force:source:pull -f');
} else {
    simpleExecute('sfdx force:source:pull');
}
