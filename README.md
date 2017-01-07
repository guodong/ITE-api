## ITE-API

Integrated Testing Environment

### Usage

* Install pm2
```javascript
$ npm install -g pm2
```

* Configure mongodb and http server info in ecosystem.config.js

* Install dependencies

```javascript
$ npm install
```

* Start server

```javascript
$ pm2 start ecosystem.config.js
```