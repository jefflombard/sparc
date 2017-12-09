#!/usr/bin/env node
'use strict';
const program = require('commander');

// General Setup
program
  .version('0.0.1')
  .description('Create lightning apps with flash.');

//Commands
program
    .command('add <packageName>','adds package of packageName.')
    .command('app <appName>','creates a Lightning app called appName.')
    .command('apex <className>', 'creates an apex class called className')
    .command('create <projectName>', 'creates a project named projectName.')
    .command('component <componentName>', 'creates a Lightning component named componentName.')
    .command('login [alias]','opens web login and automatically sets the authenticated hub org to default.')
    .command('open','opens the local default scratch org.')
    .command('org <orgAlias>','creates a scratch org with the name <orgAlias>')
    .command('orgs','lists your available orgs')
    .command('preview','pushes local code to default scratch org and opens in a new window.')
    .command('pull', 'pulls changed source from the scratch org to local project folder.')
    .command('push', 'pushes local project to default scratch org.')

//   .command('create <projectName>','creates a new project called projectName')
//
// // Package and tools
// program
//   .command('add <package>','adds a sparc add-on to your project.')
//
// // Working with scratch orgs
// program
//   .command('build','runs the build command for the project.')
//   .command('push','pushes local project to default scratch org.')
//   .command('push:force','pushes local project to default scratch org ignoring conflicts.')
//   .command('preview','pushes local code to default scratch org and opens in a new window.')
//   .command('open [appName]','Opens app named appName, if provided, otherwise just opens scratch org.');
//
// // Testing
// program
//   .command('test','runs the test command for the project');
//
// // Deploying
// program
//   .command('package','builds a package that can easily be deployed to a production org.');

program.parse(process.argv);
