const program = require('commander');
const { simpleExecute } = require('./sparc-helpers.js');
simpleExecute('sfdx force:org:open');

program
  .parse(process.argv);

const args = program.args;
const appName = args.join();
const previewOrg = (appName) => {
    const base = "sfdx force:source:push && sfdx force:org:open";
    const commandString = appName ? `${base} -p c/${appName}.app` : base;
    simpleExecute(commandString);
};

if (!args.length) {
    return previewOrg();
} else if (args.length > 1) {
    console.log(`Spaces are not supported, you can open your app with:
    sfdx force:org:open -p c/<appName>.app
        `);
    process.exit(1);
} else {
    previewOrg(appName);
}
