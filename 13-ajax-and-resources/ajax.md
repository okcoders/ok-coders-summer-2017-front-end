Ajax
====

Asynchronous Javascript and XML (Though XML is certainly not required.) is a
technique used in web applications to retrieve and utilize information to change
the current web page without reloading it. One can tell if Ajax is being used if
(in chrome for example), you see the page loading new information and adding
that content to the page without seeing the reload button change to an X and
then back, and without seeing any of the other content go away momentarily. This
is different than how things used to be where for every page viewed there was
one request to a server, and then one response. With Ajax you may request a main
page, but that page may then fire of numerous Ajax requests to gather additional
information all while you are able to continue to scroll and interact with the
current information on the page uninhibited (that being the asynchronous part).

The components of Ajax:

## XMLHttpRequest:

This api object provided to javascript allows one to do all the standard HTTP
calls (GET, POST, PUT, and DELETE), within a script tag, either async or
synchronous

## Json (For us):

The format we can use to parse the response text into a plain old javascript
object (or array of objects).

## A Callback

When we do things async, we need a function that handles the result of the async
XMLHttpRequest - including when it fails

## Dom Manipulation

When we get our data back, we want to usually update the DOM (the html on the
page) in some way to inform the user of the new data.


