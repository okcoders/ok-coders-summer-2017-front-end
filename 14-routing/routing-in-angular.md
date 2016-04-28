Routing in Angular
====

Because of the way we interacted with servers for such a long time through urls,
browsers have implemented a ton of features around this idea. For example, the
back button, the history section, bookmarking, and sharing of urls through
email are all pretty common and expected things at this point.

Think about what we have so far with our single-page-applications. We have a lot
of functionality and state changes that come from user interaction with the
site, yet the url has stayed the same during the entire process. We need a way
within our SPA to update "where the user is". We can achieve this with some
services provided by angular.

## $route

Allows us to update the current url when we want to, or retrieve what the
current url is.

## routeProvider

The main component we use to configure what we want our applications routes to
be.

### when

Used to match the route, and then to call certain functionality based on the
rest of the configuration in the block

#### url and parameters

We can utilize parameters by using a : in our route. For example, users/:id.

#### template, controller, controller as, resolve

Whenever a route is matched, these values will be utlized to decide what to do.

### otherwise

Fallback functionality in case the route that is provided does not match
anything.

Note: all of the above is used along with the ngView directive. Also, you must
install the route resource.


