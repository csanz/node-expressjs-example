
/*
 *  INSTALLATION SCRIPT
 *
 */

//
// Remember to change your database name here
// should you want to use something different
//
var databaseName = 'blog'

/**
 *  Print Starting Message
 */

print ('\nStarting Installation...')

/**
 *  Database installing
 */
print ('Database name will be `' + databaseName
      + '`, to change it, edit this very file. (install_db.js')

db = db.getSisterDB(databaseName)

// Clean database's admin document
db.admin.drop()

// Set up default host and port
var host = 'http://localhost'
var port = 3000

// Setup default theme
var theme       = 'bootstrap_basic'

// Create admin document
db.admin.insert({ 'doc_name'            : 'admin_keys'
                , 'host'                : host
                , 'port'                : port
                , 'theme'               : theme
                })
