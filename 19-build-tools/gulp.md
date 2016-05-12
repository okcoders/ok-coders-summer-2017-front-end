# Build Tools - Gulp

# Why?

We have not learned much about these things, but there is a ton of stuff you can
do between what you consider finalized code and runtime production. For example
you may test, lint (check for style problems), minify, uglify, and deploy your
code. Considered together, doing all those things manually is awful. Gulp is a
task runner that let's us program these things. For our introduction to gulp
let's look at one of my favorite things gulp can do.

## Installing gulp and getting it going

npm install --global gulp-cli
npm install --save-dev gulp

Add a new gulp module
npm install --save-dev browser-sync

now make a gulpfile.js at the root of your project

gulp watch
