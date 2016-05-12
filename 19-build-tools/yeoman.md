# Build Tools - Yeoman

## Why?

With yeoman we can reduce generating boiler plate code to a few commands. The
template I suggested for controllers, services, directives, and resources is
pretty verbose, and we find ourselves repeating a lot of the same actions. When
this happens as a developer that should be a red flag that we can abstract out
what we are doing. Hence, yeoman.

## Link for how to build your own

http://yeoman.io/authoring/

## Other links

http://yeoman.io/generators/
https://github.com/yeoman/generator-angular

Making your own generators is not too difficult, but there are a lot already out
there. For example the above link takes us to a preexisting angular generator,
but notice they don't follow the style guide we use!

## Making our own

`
// install yoeman
npm install -g yo
`
-g since we will be using it for multiple projects.

`
// install a generator for yeoman, i.e boilerplate for writing custom yoeman
//generators
npm install -g generator-generator
yo generator
`
The above sets up the structure for a generator. Below we will then setup
subgenerators. The idea here is: main generator should be a new project,
subgenerators should be components within the project, for example in the
angular world this can be controllers, directives, services, etc.

`
yo generator:subgenerator <name>
`
From here we just need to change a few things in our template file and in our
index.js

Change prompts to get the variable values we need and use this.fs.copyTpl to
inject the prompt values into your templates.
