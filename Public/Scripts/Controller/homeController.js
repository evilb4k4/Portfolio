'use strict';

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('#about-page').hide();
    $('#projectContentPlaceholder').show();
  }

  module.homeController = homeController;

})(window);
