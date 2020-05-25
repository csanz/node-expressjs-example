# expressjs-example

expressjs-example is a super light, super simple developer-friendly app built on Node.js, feel free to copy it and build your own application.

![Screenshot](https://raw.github.com/csanz/node-expressjs-example/master/public/images/sample.png)

## Configuration

* Rename .env-example to .env
* Create Pusher account and update .env
* Update .env with all other variables

### Setup & Run the app

    Install node, npm, mongodb
    Run `npm install` in the project directory
    Run `node .` and point your browser to http://localhost:3000

## Production

      (Install Heroku Toolbelt and setup account)

You'll need to add a new config entry using heroku terminal utility.

      heroku config:add NODE_ENV=production
