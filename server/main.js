import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users'
import { Links } from '../imports/api/links'
import '../imports/startup/simple-schema-configuration.js'

Meteor.startup(() => {

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if(link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end()
      Meteor.call('links.trackVisit', _id);
    } else {
      next()
    }
    // res.statusCode = 302;
    // res.setHeader('Location', 'http://www.google.com');
    // res.end()
  })
/*
  WebApp.connectHandlers.use((req, res, next) => {
    console.log('passage par le custom middleware');
    console.log(req.url, req.method, req.headers, req.query);
    // TODO:  outils pour connaitre les status code http - https://httpstatuses.com
    // set HTTP status code
    // res.statusCode = 404;
    // set HTTP Header
    // res.setHeader('my-custom-header', 'tknack was here')
    // set HTTP body
    // res.write('<h1>This is my middleware at work !</h1>')
    // end HTTP request
    // res.end();

    next();
  })
  */
});
