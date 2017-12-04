const { exec } = require('child_process');
exec('sfdx force:org:open', (err, stdout, stderr) => {
  console.log(`${stdout}`,`${stderr}`);
});
