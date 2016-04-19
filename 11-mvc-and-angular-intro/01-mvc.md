Model, View, and Controller
====

Originally thought up for desktop applications, MVC has been adopted for web
applications as well. MVC is a design pattern. There are no hard and fast rules
for how to create a system that utilizes MVC, but learning the concepts can make
creating and scaling a web application much easier. First let's talk about MVC
in general, then we can talk about how Angular.js puts its own flavor on MVC.

# Model

All applications work with data in some way. Think for a second about the model
you may see behind a blogging application. Model is an abstract term, but
typically you will have certain entities, and those entities will have
attributes and relationships within your program ecosystem. So, for a blog
application, some of the first things that come to mind are posts, and authors.
You may have a posts model with title, body, date created, and author. Thinking
in terms of javascript it may look like this:

```
var posts = [
  {
    id: 1,
    title: 'How to model things',
    body: 'blah blah blah',
    author: 1,
    created: '2016-04-16'
  },
  {
    id: 2,
    title: 'How to not model things',
    body: 'blah blah blah blah blah blah',
    author: 1,
    created: '2016-04-16'
  },
]

var authors = [
  {
    id: 1,
    first: 'How to model things',
    last: 'blah blah blah',
    role: 'admin',
    created: '1989-12-27'
  }
]
```
Notice the id values create a relationship between posts and authors. The
relationship between author to posts is called one-to-many since one author may
have many posts.

Given this model, we may have some functionality defined that allows us to create
new posts, create new authors, update posts, delete posts, get posts for a
particular author, etc. This functionality is often called CRUD (Create,
Retrieve, Update, and Delete). Most databases provide all this functionality.

# View

Most applications you have dealt with probably didn't display the model
described to you above in the exact format you see (the Array of Objects). Often
they will only show some of the attributes in a particular model, and will often
display them in tables, or in charts. For example we may have a *ul* of posts
for a particular author and a bar chart with created in the x axis and count in
the y to visualize # of posts over time for an author. The view will often
include some templating engine to inject the model into html. Think of a loop
that creates html with variables for the particular values at the moment.

In angular using our posts model from above it looks like:

```
<ul>
 <li ng-repeat="post in posts>
   <a ng-href=/post/{{ post.id }}>
     {{ post.title }}
   </a>
 </li>
</ul>
```
Don't worry much about the above syntax, just notice angular allows us to write
html along with some special syntax to inject our model (the templating engine)

# Controller

Alright, last part, the controller is the glue between the model and the view.
Based on certain user inputs, the controller will respond to those inputs by
changing the model, the view, or both. Think for a minute about a submit button
for a new post on a blogging site. The submit button corresponds to the create
operation in our model, and the input fields that the user typed the information
into is part of the view. Once you hit submit, the controller will handle taking
that user input, validating it, sanitizing it, telling the model to create it,
and then changing the view after that based on whether or not the operation was
successful or not. For example, one may see a red banner displayed at the top
saying that the title of the post is already taken and to choose a new one.

# But Why?

Over time programmers realized that setting up their applications in this way
made it easier to reason about and to update. So no great reason other than
empirical evidence of utility. For example, the model is the model, changing the
view or the controller shouldn't have anything to do with the model. So we keep
them separated in our code.

# What about Angular and this class?

For this class we will use a public api to retrieve the data we will display on
our site. So we will only be retrieving the model - no creating or updating.
From there we will use controllers and views to allow the user to query the api,
and consume information in different views (tables, charts, etc.).
