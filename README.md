# nodejs-blog

nodejs-blog is a super light, super simple developer-friendly blog app built on Node.js

![Screenshot](https://raw.github.com/csanz/nodejs-blog/master/public/images/sample.png)

### See it in action

![Animation](https://raw.github.com/csanz/nodejs-blog/master/public/images/recording.gif)

### Installation

    Install node, npm, mongodb
    Run `npm install` in the project directory
    Run `node .` and point your browser to http://localhost:3000

## Configuration

* Rename .env-example to .env
* Create Pusher account and update .env
* Update .env with all other variables

## Run the app

    $ node .

## Production

      (Install Heroku Toolbelt and setup account)

You'll need to add a new config entry using heroku terminal utility. 

      heroku config:add NODE_ENV=production
