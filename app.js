'use strict';
function Project (title, content, link, deployDate, lastUpdated, screenshot) {
  this.title = title;
  this.content = content;
  this.link = link;
  this.deployDate = deployDate;
  this.lastUpdated = lastUpdated;
  this.screenshot = screenshot;
}
$(document).ready(function(){
  var $newProject = $('<li>' + new Project + '</li>');
  $('projectList').prepend('$newProject');
});
