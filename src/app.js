import angular from 'angular';
import ngMaterial from 'angular-material';
import ngNewRouter from 'angular/router';
import * as RandomImagesModule from './modules/randomimages';

// Sets the template path - uses ES2015 template strings
function setTemplatesPath($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(name => `src/components/${name}.html`);
}

// Routing for the application //TODO: make it a separate module
function AppController ($router) {
	$router.config([
        { path: '/', component: 'randomimages'}
  	]);
}

angular.module('materialApp', ['ngNewRouter', 'ngMaterial'])
    .factory('RandomWordSvc', RandomImagesModule.wordSvc)
    .factory('GooglImgSearchSvc', RandomImagesModule.googlImgSvc)
    .controller('RandomimagesController', RandomImagesModule.ctrl)
    .controller('AppController', ['$router', AppController])
    .config(['$componentLoaderProvider', setTemplatesPath])

export default 'materialApp';