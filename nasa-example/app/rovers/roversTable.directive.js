angular
  .module('rovers')
  .directive('roversTable', roversTable)

function roversTable() {
  var template = `
    <table class="overview table table-bordered table-striped">
      <tr ng-repeat="r in rovers.roversData">
        <td><a ng-href="#/rover/{{ r.name }}">{{ r.name }}</a></td>
        <td>{{ r.landing_date }}</td>
        <td>{{ r.max_sol }}</td>
      </tr>
    </table>
  `

  var directive = {
    template: template
  }

  return directive
}
