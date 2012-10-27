
require('./lib/exceptions')

if(!process.env.NODE_ENV) process.env.NODE_ENV = "development"

require('./lib/pluma')(onLoadedApp)

function onLoadedApp (app) {
  var port  = app.get('port')

  app.listen(port)

  console.log ( '\x1b[36mExpressJS Blog\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d'
              , app.get('version')
              , app.get('env')
              , app.get('host')
              , port
  )
}
