const { exec } = require('child_process');
const fs = require('fs');

const executeInDir = (projectName,cmd) => {
    return `cd ${projectName} && ${cmd} && cd ..`
};

module.exports = {
    commandTextGenerators: {
        addNPM: function(projectName){
            return executeInDir(projectName,'npm init -y');
        },
        addGit: function(projectName){
            return executeInDir(projectName,'git init');
        },
        addRedux: function(projectName){
            return executeInDir(projectName,'npm install redux redux-thunk --save');
        },
        createSFDX: function(projectName){
            return `sfdx force:project:create --projectname ${projectName}`;
        },
        initialCommit: function(projectName){
            return executeInDir(projectName,'git add . && git commit -m ${projectName}');
        }
    }
    mkDir: function(dirName){
        const dir = `./${dirName}`;
        if (!fs.existsSync(dir)){
            return fs.mkdirSync(dir);
        } else {
            console.log('Directory name already exists!');
            process.exit(1);
        }
    },
    simpleExecute: function(command){
        return exec(command, (err, stdout, stderr) => {
          console.log(`${stdout}`,`${stderr}`);
        });
    }
}
