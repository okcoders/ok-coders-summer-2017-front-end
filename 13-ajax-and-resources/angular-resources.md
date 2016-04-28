Angular Resources
====

From the example that utilizes XMLHttpRequest, we can see that it is a bit
onerous to perform an ajax operation. First there is a decent amount of
boilerplate, and the style is a little bit clunky since we are doing things on
multiple lines (like newing the XMLHttpRequest object, opening it, sending it,
etc.). Angular provides a built-in service for us called $http that make it a
lot easier for us to perform ajax, they then make it even easier for us to
integrate with apis by providing the $resource factory (a factory is just
something that creates things, and in this case the $resource factory helps us
create objects that wrap the $http service in helpful methods.

# $http service

We will mostly not use this service, but let's take a look at as, as we will be
using it indirectly with angular resources.

```
$http
 .get()
 .post()
 .put()
 .delete()
 .and more...

 $http
  .get(url, { optional config object })
  .post(url, data, { optional config object })
```

Calling one of these methods will then return a promise. We will get to what a
promise is in a bit.

There are quite a few params available in the configuration object, but here are
two of the more popular:

Params: key value pairs that are added as ?key=value&key=value to the end of the
route
Headers: HTTP headers that are added to the head of the http call

# Promises

Whenever you promise something it means you don't have it at the moment, but you
will later, and when you have it later, you will then perform some action. In
the programming world we really do have something that is akin to this, also
called a promise.

At its simplest, promises wrap the thing we actually want and provide us with a
few methods. The main two we care about are success and fail. Those two
parameters both expect the value to be a function. depending on the end result,
on of the two functions will be called. In the case of success, usually the data
you are interested in is passed as the first parameter to your success callback
function.

# Resources

Using the $http service is much better than the ajax we wrote when we utilized
the low level XMLHttpRequest object, but we can actually abstract our use of
ajax one more level, which leads us to angular resources. With the $http service
we are specifying the url we want to go to for every call. What we have seen
with good Restful design is that one api uri will often have multiple methods
defined on it. Our use of resources will help us be more dry in our code by not
repeating the url for our api of interest everytime. It will also give us some
default functionality for every resource we define, for example, for every
resource, we get these methods:

{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} }

Note: the resource service is not in the angular bundle by default, you must
install it (with bower).
