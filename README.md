# react-for-hipsters-boilerplate
Fresh boilerplate with brand new hot reloading confing and other hipster stuff

## Includes:
- React 0.14.0-rc1
- Redux 3.0.2
- `Promise` and `Fetch` polyfills
- AirBnB ESLint Styleguide
- [brand new hot reloading](https://github.com/gaearon/react-transform-boilerplate) for Webpack
- PostCSS

## What you need to do
First of all you need to clone repo and remove it from Git
```
git clone git@github.com:chicoxyzzy/react-for-hipsters-boilerplate.git
rm -rf .git
```
After that you should fix `package.json` file by changing `name`, `author` and `version` fields

### Start dev environment
Run `npm start` and enjoy all modern stuff at [http://localhost:3000](http://localhost:3000)

### Test build with sourcemaps and all that shit
`npm run build:test` builds all the things to `/public`

### Production build
`npm run build:prod` builds all the things to `/public` too

### Version bumping
Run `npm version patch` or `npm version minor` or `npm version major` according to SemVer.
This will start ESLint and run tests. Notice that you should choose test framework yourself (maybe I'll fix it in future by choosing one for you). If linting and tests pass `postversion` hook will bump version in `package.json`, add version tag and push all you commits and tags to your **current branch**
