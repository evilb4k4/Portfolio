'use strict';

(function(module){
  const aboutController = {};

  aboutController.init = function () {
    $('#projectPlaceholder').hide();
    $('#about-page').show();
  }

  module.aboutController = aboutController;
})(window);
