'use strict';

var projects = [];

function Project (items) {
  this.title = items.title;
  this.link = items.link;
  this.deployDate = items.deployDate;
  this.lastUpdated = items.lastUpdated;
  this.screenshot = items.screenshot;
  this.description = items.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('.title').html(this.title);
  $newProject.find('.projectLink').html(this.link);
  $newProject.find('.deploy').html(this.deployDate);
  $newProject.find('.updated').html(this.lastUpdated);
  $newProject.find('.projectDescription').html(this.description);
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.deployDate)) - (new Date(a.deployDate));
});

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
  console.log(projects);
});

projects.forEach(function(a) {
  console.log(a);
  $('#projectPlaceholder').append(a.toHtml());
});
