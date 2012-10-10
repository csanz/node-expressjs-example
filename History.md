# TO-DO

 * Add friggin validation
 * Post Editor ala Tumblr
 * Add Themes, Plugin and Widget Support
 * Define the way of having variable themes & templates
   (ala wordpress).


# Must have features

 * Socket.io (instead of Pusher)
 * Errors 404 & 500 as next () middleware elements
 * Prev & Next Post
 * Transitions List - Post - List
 * Binding of Back & Forward Button
 * Responsive Design (different Resolutions)
 * Hooks on New, Modified Post
 * Comments + Hooks
 * Autentication for admin, editors (twitter oauth)
 * Add DISQUS Support on comments
 * Admin Panel
 * RSS Support

# Before Pushing

  * Completar
    * List author
    * List cat
    * List tag
    * 3 model tests (aut, cat, tag)
    * 4 tests via routes
    * admin + new post (basic version)
    * Configuración adecuada del development mode y stub para production
    * Use redis for admin sessions

  * Subir lo que llevo a nodejs.cl

# Versions

0.2.0

 * Heavy refactoring
 * Upgraded NodeJS to 0.8.x 
 * Upgraded ExpressJS to 3.0.0rc4
 * Upgraded jQuery requeriment to 1.8.2
 * Upgraded Bootstrap to 2.1.1
 * Added environment switch and files based on NODE_ENV variable
   default is `development`
 * Augmented BlogPost Model to support Tag, Categories and Authors
    * Added Author Model
 * Added Test Support, with sample data for list retrieval
 * Removed pusher (will be replaced by socket.io)
 * Added routes for post queries on tag, categories and authors

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
