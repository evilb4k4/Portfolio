'use strict';

const projectView = {};

projectView.mainNavigation = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('.main-nav .tab:first').click();
};

projectView.getWordCount = function() {
  $('#word-count').text(Project.wordCount());
}

projectView.mainNavigation();
projectView.getWordCount();
