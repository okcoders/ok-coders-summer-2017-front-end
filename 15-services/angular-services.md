# Custom Angular Services

There are certain things that have what is sometimes called "cross-cutting
concerns". In plain terms, there is something we wrote that has use cases across
our application, and we want to re-use that code without writing it again.

A very common example of this is a resource that connects to some api. Early on
we tend to pack a lot of logic for using a resource into our controller. For
example think about the most read post on a blog post. If you wanted to retrieve
that you would query the api for all posts, and then on successful response you
have to filter to the post with the most views, and attach that post to some
scope variable on your controller.

Imagine you have some other controller that wants to get the most popular post
as well. Without a service we would have to duplicate our code that calls the
api and then filters. With a service we can have a method called that each
controller uses:

`
api.getMostPopularPost()
`

That method may then look like:

`
this.getMostPopularPost = function() {
  return apiResource.get({}, this.mostPopularSuccess, this.mostPopularFail)
}

function this.mostPopularSuccess(data) {
  var mostViews = _.maxBy(data, o => o.views)
  // modify the object returned on line 27 above
  data.mostPopularPost = _.filter(data, o => o.views === mostViews)
}

function this.mostPopularFail(error) {
  $log(error)
}
`

In general, we want to push as much logic as we can to services, and avoid
putting too much logic in the controller. The controller should really only be
calling other services in response to user clicks and input, and updating the
the user interface based on information from a service. Also, services are
useful for passing information from one controller to another, if one finds a
need to do that.
