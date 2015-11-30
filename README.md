# react-for-hipsters-boilerplate
Fresh boilerplate with brand new hot reloading config and other hipster stuff. IE10+

## Includes always last versions of:
- React
- Redux
- Director
- `Promise` and `Fetch` polyfills
- AirBnB ESLint Styleguide
- [brand new hot reloading](https://github.com/gaearon/react-transform-boilerplate) for Webpack
- PostCSS
- [debug-dude](https://github.com/ggarek/debug-dude) by [@ggarek](https://github.com/ggarek) (you should enable it by setting `debug` field to `*` in local storage)

## What you need to do
First of all you need to clone repo and remove it from Git
```
git clone git@github.com:chicoxyzzy/react-for-hipsters-boilerplate.git
cd react-for-hipsters-boilerplate
rm -rf .git
```
After that you should fix `package.json` file by changing `name`, `author` and `version` fields

### Start dev environment
Run `npm install` to setup the initial environment and download dependencies 

Run `npm start` and enjoy all modern stuff at [http://localhost:3000](http://localhost:3000)

### To check your code for lint and other types of errors 
Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines.  

`npm run lint` checks the sources in ./src/scripts/   

if you do not have eslint installed you can install it with 

`npm install eslint -g`


### Test build with sourcemaps and all that shit
`npm run build:test` builds all the things to `/public`

### Production build
`npm run build:prod` builds all the things to `/public` too

### Version bumping
Run `npm version patch` or `npm version minor` or `npm version major` according to SemVer.
This will start ESLint and run tests. Notice that you should choose test framework yourself (maybe I'll fix it in future by choosing one for you). If linting and tests pass `postversion` hook will bump version in `package.json`, add version tag and push all you commits and tags to your **current branch**
