'use strict';

(function(module) {
  const repoView = {};

  let render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    $('#repos').empty();
    $('#repos').append(repos.with('name').map(render));
  };

  module.repoView = repoView;

})(window);
