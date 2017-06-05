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
Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.deployDate)) - (new Date(a.deployDate));
  });

  rawData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  });
}

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

Project.initialize = function() {
  Project.all.forEach(function(a) {
    $('#projectPlaceholder').append(a.toHtml());
  });
}
