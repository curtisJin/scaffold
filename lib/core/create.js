const program = require("commander");
const { createProjectAction } = require("./actions");
const createCommands = () => {
	program
		.command("create <project> [others...]")
		.description("Clone the project to current folder")
		.action((str, options) => {
			createProjectAction(str, options);
		});
  // 创建组件
};

module.exports = createCommands;
