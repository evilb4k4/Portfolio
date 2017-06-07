'use strict';

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('#about').hide();
    $('#projectPlaceholder').show();
  }

  module.homeController = homeController;

})(window);
