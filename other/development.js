



  /**
   * Set all theme related env vars and middleware
   *
   * - Views directory
   * - View engine (jade by default)
   * - Stylus middleware
   * - Static files directory middleware
   *
   */
  function setThemeVariables (app) {
    var themeName       = s.values.theme
    var themeDirectory  = __dirname + '/../../../themes/' + themeName + '/'

    // Set views directory
    app.set('views', themeDirectory + 'views')

    // Set view engine and stylus middleware
    app.set('view engine', 'jade')
    app.use(stylus.middleware(
      { src     : themeDirectory + 'public'
      , compile : compileStylus
      })
    )

    // Stylus hack
    function compileStylus (str, path) {
      return stylus(str)
        .set('filename', path)
        .include(nib.path)
    }

    // Set static files middleware
    app.use(express.static(themeDirectory + 'public'))

    return app
  }

  /*
   *  Set Logger middleware
   *
   * You can choose among express native logger
   * or any winston's transport
   */
   function setLogger(app) {
    // TODO: Present winston option
    var loggerString = '\033[90m:method\033[0m \033[36m:url\033[0m'
                     + ' \033[90m:response-time ms\033[0m'
    app.use(express.logger(loggerString))

    return app
   }

  /**
   * Set cookie parser and session middleware
   *
   * You can choose among using connect's session
   * or redis
   */
  function setSessionStore (app) {
    app.use(express.cookieParser())

    // TODO: Boolean to load redis

    app.use(
      express.cookieSession(
        { secret : 'f29208b23abeb2099b3f24e0d53a8a36875cb43c'} ))
    return app
  }