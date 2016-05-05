angular
  .module('directiveExample')
  .directive('example', example)

var exampleTemplate = `
  <div>
    {{ completed }}
  </div>
`

function example() {
  var directive = {
    template: exampleTemplate,
    scope: {
      example: '=',
    },
    link: function(scope) {
    }
  }
  return directive
}
