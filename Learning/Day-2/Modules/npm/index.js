const chalk = require("chalk")
const validator = require("validator")


const res = validator.isEmail("admin@admin.com");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));