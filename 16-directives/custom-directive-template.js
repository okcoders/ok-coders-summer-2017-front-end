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
    template: progressTemplate,
    scope: {
      completed: '=',
      total: '='
    },
    link: function(scope) {
    }
  }
  return directive
}
