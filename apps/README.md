# Apps folder

This is where the `apps` of PlumaJS are meant to live. As of 0.2.0 version, there are only basic apps in this directory, but, everytime a user adds an `app` to PlumaJS, it will reside here.

## App structure

* Directory Name

Should be the same as the `app` name. We use from now on `admin` as an example

* README.md

Contains all documentation relevant to the app.

* Model File

  * Name should be the app name, underscore and model, example, `admin_model.js`. Now, if your app has several models, or if the app name is different, you can use other name. Such is the case with the app `blog` which has the model `blogpost_model.js`.
  * Contains all database access schema and functions, and is required by `models.js` at loading time.

* Route File

  * Name should be the app name, underscore and routes, example, `admin_routes.js`.
  * Should contain the routes and the adecquate requirement of the controller function which handle them.
  * A rule should be that all routes must be preceded by the name of the module. Example '/admin'
  * Now, about the above, should PlumaJS check and enforce this rule?, should PlumaJS allow flexibility in any cases?

* Controller File

  * Name should be the app name, underscore and controller, example, `admin_controller.js`.
  * Contains all functions (public and private) which handle the routes call

* Other files, libs

Some rules about that: 

  * Try to be self-sustainable in the sense of not requiring other `apps` resources
  * We need to solve the problem when the developer needs some node module installed
  * We need to solve the problem of resource access authorization for other modules. Example, a module needs the data from users.

