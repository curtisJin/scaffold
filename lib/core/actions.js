// This file is used to handle different program.action

const { promisify } = require('util'); // Node comes with a tool library, users can change the callback type to the promise type.
const { reactRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const download = promisify(require('download-git-repo'));
const open = require('open');

const createProjectAction = async (projectName, other) => {
  console.log('ck help you create your project!!!')
  // 1、clone project
  await download(reactRepo, projectName);

  // 2、execute install
  await commandSpawn('cnpm', ['install'], { cwd: `./${projectName}` });
  
  // 3、npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${projectName}`});
  // 4、open browser
  open('https://localhost:8080/');
}

module.exports = {
  createProjectAction,
}