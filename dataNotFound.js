Router.configure({
  layoutTemplate: 'defaultLayout',
});

Router.plugin('dataNotFound', {
  notFoundTemplate: 'dataNotFound'
});

Router.route('/', {
  template: 'home'
});