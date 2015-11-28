#! /usr/bin/env node

module.exports = require('white-lint')(require('./package.json'))

if (require.main === module) {

    module.exports.lintAsCli()

}
