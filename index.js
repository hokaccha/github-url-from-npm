'use strict';

var superagent = require('superagent');
var githubUrlFromGit = require('github-url-from-git');

var NPM_REGISTRY_URL = 'http://registry.npmjs.org/';

function pickUrl(data) {
  if (data.repository && data.repository.url) {
    return githubUrlFromGit(data.repository.url);
  }
}

module.exports = function(npmPackageName, fn) {
  superagent
    .get(NPM_REGISTRY_URL + npmPackageName)
    .end(function(err, res) {
      if (err) return fn(err);

      var url = pickUrl(res.body);
      if (!url) return fn(new Error('Repository URL Not found'));

      fn(null, url);
    });
};
