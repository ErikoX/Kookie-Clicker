# Kaboom Template

This is a template for kaboomjs for VSCode (or other IDEs)

## Installation

1. Download or clone the repository
2. In the project, run `npm install`
3. Adjust files (like the cursor in index.html)

## NPM Scripts

You can find 3 NPM Scripts in the project:

`runServer` - Run the server with `node index.js`

`testServer` - Run the server with `nodemon index.js` (Install nodemon with `npm i nodemon -g`)

`buildJs` - Starts `esbuild` (js bundler) in watch mode and bundles + minifies the javascript to `dist/dist.js` 

`noMinifyJs` - (see buildJS, but the code is not minified) 

You can use this freely :D