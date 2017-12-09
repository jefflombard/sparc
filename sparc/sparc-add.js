const program = require('commander');

program
  .command('redux','adds redux package to current project.')
  .command('strike','adds bolt components')
  .command('webpack','adds redux package to current project.')
  .command('sass','adds redux package to current project.')
  .command('flow','adds flow')
  .command('router','adds lightning router')
  .parse(process.argv);
