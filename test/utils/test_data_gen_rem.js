
exports.generateTestData = function (done) {
  var exec = require("child_process").exec;
  var cmd  = 'mongo test/mongo_scripts/generate_test_data.js';
  exec(cmd, function (error, stdout, stderr) {
    if (error || stderr) {
      console.log(error || stderr);
      throw 'Error on Data Generation for Test!'
    } else {
      done();
    }
  });
};

exports.removeTestData = function (done) {
  this.timeout(3000)
  var exec = require("child_process").exec;
  var cmd  = 'mongo test/mongo_scripts/remove_test_data.js';
  exec(cmd, function (error, stdout, stderr) {
    if (error || stderr) {
      console.log(error || stderr);
      throw 'Error on Data Removal for Test!'
    } else {
      done();
    }
  });
};