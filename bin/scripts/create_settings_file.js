
/*
 *  INSTALLATION SCRIPT
 *
 */

var fs = require('fs')

/**
 *  Create settings.js file
 */

//
// Remember to change your database name here
// should you want to use something different
//
var databaseName = 'blog'

// If settings exists, we rename it
if (fs.existsSync(__dirname + '/../../lib/settings.js'))
  fs.renameSync(  __dirname + '/../../lib/settings.js'
                , __dirname + '/../../lib/settings_old.js')

// This is what will be in the file:
var settingsContents = ''
settingsContents += '// Mongo database name is...' + '\n\n'
settingsContents += 'exports.mongoDBUrl = \'mongodb://localhost/' + databaseName + '\'' + '\n\n'
settingsContents += '// The rest of the keys are in the database' + '\n'

// And We write this
fs.writeFileSync(__dirname + '/../../lib/settings.js', settingsContents)

/**
 * Print Exit Message
 */
console.log ('\nYour system is set, just type `node .`')
