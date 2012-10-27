
# Versions

**************
DOING

  * login
  * admin dashboard
  * Admin Panel + New `Edit Post` UI

**************
TODO

0.2.0

  * Added User Model
  * Added Author Model (<- This, remove!)

  * User sessions with RedisDB
  * Twitter OAuth
  * Socket.io (instead of Pusher)
  * Prev & Next Post
  * Transitions List - Post - List
  * Binding of Back & Forward Button
  * Hooks on New, Modified Post
  * Comments + Hooks
  * Autentication for admin, editors (twitter oauth)
  * Add DISQUS Support on comments
  * Admin Panel
  * RSS Support
  * admin + new post (basic version)
  * admin_keys
    * flags
      * redis support
      * winston support
      * oauth
  * Live sample: nodejs.cl
  * Better encryption for passwords
  * Adaptar Effector theme
  * App: Hook to an RSS Feed
  * App: tag cloud
  * App: tweets
  * Post Editor ala Tumblr
  * Add Themes, Plugin and Widget Support
  * Define the way of having variable themes & templates (ala wordpress).
  * Reblog built in (with the ability of reblog anything)
  * Blog migrator
  * Documentation in gh-pages
  * JSON Support (res.json)
  * Added Test Support, with sample data for list retrieval
  * Removed pusher (will be replaced by socket.io)
  * Added routes for post queries on tag, categories and authors


************** 
DONE

0.2.0

  * Modified directory structure to support themes and `apps`
  * Upgraded jQuery requeriment to 1.8.2
  * Upgraded Bootstrap to 2.1.1
  * Upgraded NodeJS to 0.8.x
  * Upgraded ExpressJS to 3.0.0rc4
  * Added environment switch and files based on NODE_ENV variable default is `development`
  * Augmented BlogPost Model to support Tag, Categories and Authors
  * install.js file -> Must leave settings.js written

0.1.8

 * Added Bootrap support
 * Cleaned up the code 

0.1.7

 * Added express-expose support
 * Added Pusher Support
 * Added Hooks 

0.1.6
 
 * Upgraded Jade, Stylus and Mongoose
 * Added constructor to controller and included db var at the top
 * Cleaned up routes and removed the long function callback

0.1.5

 * Added slick color stuff to the terminal (http://cl.ly/0X1e1s3P3R3k2c090i3I)
 * Added repl debugging samples (See Readme)
 * Added new environments file (to support multiple environments duh)

0.1.4
  
  * Upgraded Jade to 0.13.x
  * Upgraded Stylus to 0.11.x
  * Upgraded Mongoose to 1.6.x
  * Added Logger Support with response time (Great for testing performance)
  * Integrated Express-Mongoose support inside the BlogPost model
  * Added more mixins (Stylus) and introduced imports
  * Added more detailed exceptions (lib/exceptions.js)
  * Added error pages 404 / 500 support (lib/errors.js)
  
0.1.3 / 2011-06-5 

  * Clean up lib/boot.js
  * Implemented lib/config.js
  * Implemented lib/routes.js
  * Implemented app/controller

0.1.2 / 2011-05-11

  * Changed structure to use MVC structure

0.1.0 / 2011-05-10

  * Added application. 
