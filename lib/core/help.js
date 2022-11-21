// This file is used to configure help options

const program = require('commander');

const helpOption = () => {
  // 增加自己的option
  program.option('-ck --curtis', 'a test option');
  program.option('-d --dest <dest>', 'a directory'); // <xxx> 指的是需要在-d 后面跟的内容，不然会报错
  program.option('-f --framework <framework>', 'install framework'); // 安装对应框架的包
}

module.exports = helpOption;