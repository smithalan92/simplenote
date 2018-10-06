// This file contains command line arg defintions available
// for the build and publish scripts.
// Note: alias's don't work if running the build via npm run
module.exports = [
  {
    name: 'tag',
    alias: 't',
    type: String,
    description: 'The tag to build for.',
  },
];
