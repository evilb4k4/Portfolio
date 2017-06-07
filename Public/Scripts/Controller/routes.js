'use strict';

page('/', homeController.init);
page('/about', aboutController.init);

page('/about/:userName', aboutController.loadByKeyword, aboutController.userName);

page();
