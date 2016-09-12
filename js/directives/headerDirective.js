(function() {
  angular
    .module('todoApp')
    .directive('headerDirective', function() {
      return {
        restrict: 'EA',
        templateUrl: 'js/directives/header-directive.html'
      };
    });
})();
