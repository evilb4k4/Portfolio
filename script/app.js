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

Project.sort(function(a,b) {
  return (new Date(b.deployDate)) - (new Date(a.deployDate));
});

Project.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
  console.log(projects);
});

Project.fetchAll = function() {
  if (localStorage.rawData) {
    console.log('Loading from local Storage');
    console.log('JSON.parse', JSON.parse(localStorage.rawData));
    Project.loadAll(JSON.parse(localStorage.rawData));
    console.log('Project.all', Project.all);
    Project.initialize();
  } else {
    console.log('Setting data into local storage');
    $.getJSON('Data/projectsContent.json')
    .then(function(data){
      console.log('data:', data);
      Project.loadAll(data);
      localStorage.rawData = JSON.stringify(data);
      Project.initialize();
    }, function(err) {
      console.log('Error!');
    })
  }
}

projects.forEach(function(a) {
  console.log(a);
  $('#projectPlaceholder').append(a.toHtml());
});
