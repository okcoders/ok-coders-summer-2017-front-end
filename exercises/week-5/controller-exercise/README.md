Lesson 7: $Scope and Controllers
======

For this assignment we'll build on the pages we created in the last exercise and create a few new pages. For each page you'll need to set up an application module and add a controller or controllers.

Try recreating the pages from scratch so that you have the practice of writing html. Try writing more efficient html or using a different design from the previous assignment.

Once again don't forget to add the **ngApp** directive to each of your templates, but this time assign it to the name of your application module:

**HTML**

```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
...
```

**JavaScript**

```js
angular.module('myApp', []);
...
```

You'll also need to use the **ngController** directive to set up the controller(s) for part(s) of the page:

**HTML**

```html
<div ng-controller="groceryController as gc">
  ...
</div>
```

**JavaScript**

```js
angular.module('myApp').controller('groceryController', ...)
```


## 1. Grocery List

```
public/groceries.html
```

Create a horizontal form control with three input fields for a grocery list. Next to the form create a list that automatically updates and shows what items the user has typed in the inputs.

Use bootstraps grid system to arrange your elements so that the form takes up half the horizontal page and the list takes up the other half.

**New**

Create a controller for this page that adds the model for the three grocery items to the scope. Preopulate the model with three groceries, e.g. apples, bananas, bread.

Add a submit button to your form and bind the **ngSubmit** directive on the form to a function on your controller's scope that puts the three grocery items into an array and logs the value of the array to the console.

## 2. After Tax

```
public/total.html
```

Create an input field that takes a numeric input for a purchase price. You'll need to set its `type="number"` for this to work. The input is for a dollar amount, so prepend a dollar sign to the input field and make sure it has the label "Enter Amount".

You'll need to use the `form-group`, `control-label`, `input-group`, `input-group-addon`, and `form-control` classes for this. Dig around in the bootstrap forms documentation for details.

Below the input field inform the user what the total cost of their purchase is after calculating an additional 7.3% tax. Use a numeric filter to format the expression so that it only has two decimal places.

**New**

Create a controller for this page that exposes the purchase price on the scope. Set the initial purchase price to $99.

Remove the expression that calculates the total price and place that logic in the controller. Do this by wrapping the input field in a form and creating a submit button. Bind the **ngSubmit** directive to a function on your controller that calculates the total purchase price and assigns its value to some property on the scope, which you are also binding or templating into the page.

## 3/4. Accounts

```
public/accounts
```

Create a bootstrap styled table that shows the user accounts in a system. The table should have a header with **Name** and **Admin** columns. The table should be striped but the stripe should start on the first item, not in the header. What table tags haven't we seen yet that are needed to accomplish this?

Each row in the table has two cells, one for the name of a person and the other that indicates if they are an administrator. The second cell should contain a checkbox that is checked if they are an admin and unchecked if they are not.

Modify the table so that the user can sort by a person's name or administrative status.

There are a couple ways you could do this but one is to use a radio button group to toggle between name and admin sorting.

Set up the page so that the list is initially sorted by name.

Make it possible to change the sort order from ascending to descending and back with radio buttons. It should intially be ascending. Because this will require a boolean value in the filter you'll need to use the ngValue directive on the radio buttons.

**New**

Initialize an array of objects in the controller corresponding to the following user data and iterate over it when building your table rows:

```
name: Zach Mays
admin: true

name: Melinda Gates
admin: true

name: Marcus Aurelius
admin: true

name: Mr. T
admin: false

name: Gandolf
admin: true
```

Expose that array on the scope and iterate over that scoped property in your page.
