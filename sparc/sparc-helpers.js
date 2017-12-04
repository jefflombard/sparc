const { exec } = require('child_process');

module.exports = {
    simpleExecute: function(command){
        exec(command, (err, stdout, stderr) => {
          console.log(`${stdout}`,`${stderr}`);
        });
    }
}
