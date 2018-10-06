const semver = require('semver');
const chalk = require('chalk');

// Helper function for logging with chalk.
// Adds a bit of colour to the terminal output
// for the build steps
const log = (msg, type = 'info') => {
  let color = '';
  if (type === 'success') color = 'green';
  if (type === 'error') color = 'red';
  if (type === 'info') color = 'yellow';

  console.log(chalk[color](msg));
};

module.exports = {
  log,
}
