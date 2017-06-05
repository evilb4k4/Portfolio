'use strict';

var projectView = {};

projectView.mainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.main-navigation .tab:first').click();
};

projectView.mainNav();
