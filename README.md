# electron-largetype

Large Type for Electron apps

## Getting the library

    $ npm install electron-largetype

## Using it

Somewhere in your Electron app you can do this:
```javascript
var largetype = require("electron-largetype")

largetype.show("This text is large!")
```

Easy as that.

## About Large Type

Originally built-in to certain OS X apps, "Show Text in Large Type" was popularized by Quicksilver as a way to quickly display text in easy to read large letters on your screen, typically to be read at a distance. Although it was picked up by Quicksilver alternatives like Alfred, as Spotlight became faster and more useful, there was less of a need to run fancy app launchers. As such, we lost easy Large Type.

In building DeskBot, an API to your desktop, I figured Large Type would be a great feature to include. Being an Electron app, it would just be a matter of loading a transparent browser window and implementing Large Type in HTML/CSS. I decided to make it a library so others could include Large Type in their Electron apps as well.

## License

MIT
