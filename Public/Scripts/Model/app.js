'use strict';
(function(module) {
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

    rawData.forEach(function(app) {
      Project.all.push(new Project(app));
    });
    console.log('Project.all length', Project.all.length);
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.initialize();
    } else {
      $.getJSON('Data/projectsContent.json')
      .then(function(data){
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
  Project.wordCount = () => {
    return Project.all.map((a) => {
      return a.description.split(' ').length;
    }).reduce(function (acc, val) {
      document.write(acc);
      return acc + val;
    }, 0)
  };

  Project.fetchAll(Project.initialize);

  module.Project = Project;

})(window);
