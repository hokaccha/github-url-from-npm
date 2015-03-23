# github-url-from-npm

Get GitHub URL from npm module name.

```javascript
var githubUrlFromNpm = require('github-url-from-npm');
githubUrlFromNpm('mocha', function(err, url) {
  assert(url === 'https://github.com/mochajs/mocha');
});
```

## Install

```
$ npm install github-url-from-npm
```

## LICENSE

MIT
