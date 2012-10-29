
var start = Date.now()
console.log('Loading...')

require('./lib/exceptions')

if(!process.env.NODE_ENV) process.env.NODE_ENV = "development"

require('./lib/pluma')(onLoadedPluma)

function onLoadedPluma (pluma) {
  var port  = pluma.get('port')

  pluma.listen(port)

  var diff = Date.now() - start

  console.log('Loading stage took ' + diff + ' ms')

  console.log ( '\x1b[36mPlumaJS \x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d'
              , pluma.get('version')
              , pluma.get('env')
              , pluma.get('host')
              , port
  )
}
