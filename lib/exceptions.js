var colors = require('colors');

process.on('uncaughtException', function(err) {
  console.log("\nERROR:".red.bold);
  if (err.message) {
    console.log('\nMessage: ' + err.message)
  }
  if (err.stack) {
    console.log('\nStacktrace:')
    console.log('====================')
    console.log(err.stack);
  }
});
process.addListener('uncaughtException', function (err) {
  console.log('uncaughtException: ' + err, err);
});