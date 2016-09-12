(function() {
  angular
    .module('todoApp')
    .directive('todosDirective', todosDirective);

  function todosDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'js/directives/todos-directive.html'
    };
  };
})();
