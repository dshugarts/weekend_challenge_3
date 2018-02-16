console.log('JS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQ Sourced');
    getTasks();
    $('#addBtn').on('click', createTask);
} // end onReady

function getTasks() {
    console.log('in getTasks');
    $.ajax({
        url: '/tasks',
        type: 'GET',
        success: function(data){
          console.log('got tasks: ', data);
            displayTasks(data);
        } // END success
      }); //END ajax
} // end getTasks

function createTask() {
    console.log('in addTask');
    var taskToSend = {
        task_name: $('#taskName').val(),
        due_date: $('#dueDate').val(),
        task_completed: $('#taskCompleted').val(),
      }; // end taskToSend
    addTask(taskToSend);
} // end creteTask

function addTask(newTask) {
    console.log('in addTask', newTask);
    $.ajax({
        url: '/tasks',
        type: 'POST',
        data: newTask,
        success: function(data){
          console.log('got some tasks: ', data);
          $('#taskName').val('');
          $('#dueDate').val('');
          $('#taskComplete').val('');
          getTasks();
        } // end success
      }); //end ajax
} // end addTask

function displayTasks(tasks) {
    let $tableBody = $('#viewTasks');
    $tableBody.empty();
        for(let row=0; row<tasks.length; row++) {
         let keys = Object.keys(tasks[row]);
            let $tr = $('<tr>');
          for(let col=0; col<keys.length; col++) {
         $tr.append($('<td>').attr('id', keys[col]).text(tasks[row][keys[col]])[0]);
           } // end col loop
        $tableBody.append($tr);
     } // end row loop
} // end displayTasks