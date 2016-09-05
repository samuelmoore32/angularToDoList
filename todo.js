var app = angular.module('myApp', []); 

function TodoCtrl($scope){
  // initializes the todo list
  $scope.todos = [
{text:'walk the dog', done:false, priority :'normal', date:"19th june"},
{text:'clean the windows', done:false, priority :'normal', date:"17th may"}


  ];
  // gets number of todos
  $scope.getTodos = function(){
    return $scope.todos.length;
  };
  //clear completed items on the list
 $scope.clearComplete = function() {
    var completed = $scope.todos;
    $scope.todos = [];
    angular.forEach(completed, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
  //add a todo
  $scope.addTodo = function(){
$scope.todos.push(
  {
    text:$scope.formTodoText,
     done:false,
     "priority":$scope.priority, 
     "date":$scope.date
   });
//clear the text box and set priority back to normal
$scope.formTodoText="";
$scope.priority = 'normal';
$scope.date="";
  };
  

  //remove item from list
  $scope.removeTodo = function(start){
    $scope.todos.splice(start, 1);
  };
  //move an item on the list
  $scope.move = function(index, direction){
    if (direction ==='up'){
      if(index===0){
        return;
      }
      index = index-1;
    }
    if(direction ==='down'){
      if(index === $scope.todos.length - 1){
        return;
      }
    }
  
    var todo = $scope.todos[index];
    $scope.todos.splice(index + 2, 0, todo);
    $scope.todos.splice(index, 1)
  };
}
