// polyfills
require('es6-promise').polyfill();
require('whatwg-fetch');

/* eslint eqeqeq:1, no-unused-vars:1, no-trailing-spaces:1 , indent:1, prefer-const:1, no-empty:1   */

function badSyntaxLintSample() { 
let x = 42;
if (x == 42) { } 
}  

// normalize.css
require('normalize.css');

// require your app here
require('debug-dude')('service').warn('require your app entry point plz');
