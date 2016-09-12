(function() {
  angular
    .module('todoApp')
    .directive('formDirective', formDirective);

  function formDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'js/directives/form-directive.html'
    };
  };
})();
