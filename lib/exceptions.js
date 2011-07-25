process.on('uncaughtException', function(err) {
  console.log("ERROR:");
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
  myError('uncaughtException: ' + err, err);
  //process.exit(1); -- not exiting for now.
});