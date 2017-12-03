#!/usr/bin/env node
'use strict';
const program = require('commander');

// General Setup
program
  .version('0.0.1')
  .description('Create lightning apps with flash.');

// Starting a new project
program
  .command('create <projectName>','creates a new project called projectName');

// Package and tools
program
  .command('add:redux','installs redux and adds a provider component as described in Lightning-Redux')
  .command('add:strike','adds components from the Strike library')
  .command('add:git','runs the `git init` command');

// Working with scratch orgs
program
  .command('build','runs the build command for the project.')
  .command('push','pushes local project to default scratch org.')
  .command('push:force','pushes local project to default scratch org ignoring conflicts.')
  .command('preview','pushes local code to default scratch org and opens in a new window.')
  .command('open [appName]','Opens app named appName, if provided, otherwise just opens scratch org.');

// Testing
program
  .command('test','runs the test command for the project');

// Deploying
program
  .command('package','builds a package that can easily be deployed to a production org.');



program.parse(process.argv);
