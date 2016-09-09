(function() {
  angular
    .module('todoApp')
    .controller('TodoController', TodoController);

  function TodoController() {
    var vm = this;
    vm.todos = tds;

    vm.addTodo = function() {
      var newTodo = {
        title: vm.newT,
        done: false
      };

      vm.todos.push(newTodo);
      vm.newT = '';

    };

    vm.removeTodo = function(todo) {
      var index = vm.todos.indexOf(todo);
      vm.todos.splice(index, 1);
    };

    vm.removeComp = function() {
      vm.todos = vm.todos.filter(function(item) {
        return !item.done
      });
    };

    vm.countTodos = function() {
      var count = 0;
      angular.forEach(vm.todos, function(todo) {
        if(todo.done == false) {
          count += 1
        };
      });
      return count;
    };

  };

  var tds = [];
})();
