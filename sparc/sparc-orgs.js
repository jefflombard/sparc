const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');

program
  .option('-a, --all', 'includes inactive scratch orgs')
  .parse(process.argv);

if (program.all){
    simpleExecute('sfdx force:org:list --all');
} else {
    simpleExecute('sfdx force:org:list');
}
