var dotenv             = require('dotenv')
  , variable_expansion = require('dotenv-expand')
  , colors             = require("colors");

module.exports = function(app){

  // Set color environment theme 

  colors.setTheme({
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    success: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
  });

  console.log("Setting up environment variables...".input)

  const app_enviroment = dotenv.config();
  
  variable_expansion(app_enviroment);

  return app
  
}