module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:vue/strongly-recommended"
  ],
  "env": {
    "browser": true,
    "mocha": true
  },
  // Vue Plugin uses the vue-eslint-parser, ES6 needs babel-eslint (rather than espree) though
  // https://github.com/mysticatea/vue-eslint-parser#-options
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "rules": {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "arrow-parens": ["error", "always"],
    "no-debugger": "warn",
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state"]
      }
    ]
  },
}
