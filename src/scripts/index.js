// polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

// normalize.css
require('normalize.css');

// require your app here
require('debug-dude')('service').warn('require your app entry point plz');
