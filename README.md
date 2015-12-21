# Google Cardboard "Shopping List" Hack

The "Shopping List" is an application created at the Code for Cardboard (#codeforcardboard) hackathon. See the following video for a demonstration:

[![ScreenShot](https://i.ytimg.com/vi_webp/Vyf4HoYIlYM/mqdefault.webp)](https://youtu.be/Vyf4HoYIlYM)

I was unable to access to the rear camera in Chrome on Samsung Galaxy S6, so use the Internet app instead if you're on a Galaxy phone.

Also note, this is "hackathon" grade code (the lowest of the low) so use it at your peril.

## Running Locally

To run the application locally:

```sh
$ cd cardboard-shopping-ar
$ npm install
$ node app.js
```

# Usage

The application carries out OCR on receipt of a GET request as follows:

```
$ curl http://urlofdeployedapplication.com/setcommand?command=snap
```
The application also toggles the shopping list on and off on receipt of the following GET request:

```
$ curl http://urlofdeployedapplication.com/setcommand?command=toggle
```

# Credits

Lots of code borrowed from [Stemkoski](https://github.com/stemkoski/three.js) and [Ionic Cardboard](https://github.com/driftyco/ionic-starter-cardboard)
