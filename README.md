# wundervoice-oauth

WunderVoice is a Pebble smartwatch app that allows you to quickly add items to a Wunderlist list using speech.

This repository contains a node.js app, used by the WunderVoice pebble app to authenticate with Wunderlist.

See [wundervoice](https://github.com/alirawashdeh/wundervoice) on github for the source code of the Pebble application itself.

Your app should now be running on [localhost:5000](http://localhost:5000/).


## Configuration

Sign up for API keys at [Wunderlist Developer](https://developer.wunderlist.com). Edit the following three lines app.js

 *****heroku config:set GITHUB_USERNAME=joesmith
******before running locally, 8

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd wundervoice-oauth
$ npm install
$ foreman start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

# credits

Forked from a combination of node-js-getting-started
