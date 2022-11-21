#!/usr/bin/env node

const program = require('commander');
const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

program.version(require('./package.json').version, ); // 动态引入package.json中的版本号

// help和自定义option
helpOptions();

// 执行创建命令
createCommands();

program.parse(process.argv);

// 获取自定义命令中添加的内容 program.opts()
const opts = program.opts();
// console.log(opts.dest);