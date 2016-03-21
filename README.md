# CodeStack

## App Configuration

After cloning development branch, you have to do the generate the packages and Node.js needed dependencies

1. Intalling Node.js and Bower packages
    `$ npm install && bower install`

2. Transpiling ES2015 files to ES5 version
    `$ npm run build-server:js`

## Running

* To run the application in the browser
    `node server.js`

    It'll be listening at `localhost:5000`

## Deploying to Heroku

In order to work with Heroku, You should have Git installed

1. Logging in to Heroku
    `$ heroku login`

    Should enter your Heroku username and password

2. Create Heroku application
    `$ heroku create <app_name>`

3. Pushing new app changes
    `$ git push heroku master`

## Contributing

1. Fork it from "development" branch
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
