'use strict';

(function(module){
  const aboutController = {};

  aboutController.init = function () {
    $('#projectPlaceholder').hide();
    $('#about').show();

    repos.requestRepos(repoView.index);
  }

  aboutController.loadByKeyword = (ctx, next) => {
    let keyword = ctx.params.keyword;
    next();
  }

  aboutController.userName = (ctx) => {
    let userName = ctx.params.name;
  }

  module.aboutController = aboutController;
})(window);
