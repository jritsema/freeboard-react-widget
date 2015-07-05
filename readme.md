freeboard-react-widget
=======================

A starter template for building freeboard widgets using react.

This gives you a nice development workflow by allowing you to implement your react component code in code.jsx and define your data (from a freeboard datasource or your code) in data.js, hit save, and then refresh your browser to immediately see your changes (assuming you have script to have freeboard load your dashboard.json) or you can manually re-load your dashboard.

Includes predefined npm scripts for compiling jsx and updating freeboard dashboard.json (using [freeboard-react-buildtool](https://github.com/jritsema/freeboard-react-buildtool)) when files are saved.

**setup**

```
$ git clone https://github.com/jritsema/freeboard-react-widget mywidget
$ cd mywidget
$ npm install
```

**usage**

Edit the "dashboard" script command in package.json to point to the dashboard.json file you want updated.  

```
"dashboard": "cat ../freeboard/dashboard.json | freeboard-react-buildtool > temp && cp temp ../freeboard/dashboard.json && rm temp",
```

Note that the target widget defined in dashboard.json needs to have an **"title"** property that matches the "name" property in package.json.  For example, if you update the name in package.json to "mywidget", then your dashboard.json needs to look like the following.

```
...
"widgets": [
  {
    "title": "mywidget",
    "type": "ReactWidget",
    "settings": {
      "code": "",
      "data": "",
      "height": 4
    }
  }
]
...
```

Now you're ready to edit your react code in code.jsx and define your data in data.js and then...

`$ npm run build` or `$ npm run dev` or `$ npm run watch`

...and this will compile your jsx and then update your dashboard.json with the resulting code and data properties.

