var assert = require('power-assert');
var githubUrlFromNpm = require('..');

describe('github-url-from-npm', () => {
  it('fetch github URL from npm module name', (done) => {
    githubUrlFromNpm('mocha', function(err, url) {
      assert(err === null);
      assert(url === 'https://github.com/mochajs/mocha');
      done();
    });
  });
});
