console.log('JS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQ Sourced');
    getTasks();

    $('#addBtn').on('click', createTask);

    $('#viewTasks').on('click', '.deleteBtn', function() {
        const taskId = $(this).data('id');
        deleteTask(taskId);
      }) // end .deleteBtn click

    
  $('#viewTasks').on('click', '.completeBtn', function() {
    let id = $(this).data('id');
    updateCompleted(id);
  }) // end .transfer-btn click

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
      
        let $tr = $('<tr>').attr('id', `tr${row + 1}`);
        for(let col=0; col<keys.length + 2; col++) {
            if(col === keys.length){
              $tr.append($('<td>').addClass(keys[col]).append($('<button>').data('id', tasks[row].id).text('Delete Task').addClass('deleteBtn')));
            } else if (col === keys.length +1) {
              $tr.append($('<td>').addClass(`completeBtns${row+1}`).append($('<button>').data('id', tasks[row].id).text('Complete Task').addClass('completeBtn')));
            } else {
              $tr.append($('<td>').addClass(keys[col]).text(tasks[row][keys[col]])[0]);
            } // end else
        } // end col loop
        $tableBody.append($tr);
     } // end row loop
} // end displayTasks

function deleteTask(id) {
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${id}`,
      }) // end AJAX
      .done((response) => {
        console.log('Task deleted');
        getTasks();
      }) // end done
      .fail((error) => {
        console.log('error', error);
      }) // end fail
} // end deleteTask

function updateCompleted(id) {
    $.ajax({
        type: 'PUT',
        url: `/tasks/${id}`,
        data: {id}
      }) // end AJAX
      .done(function (response) {
        console.log('Updated task complete status');
        getTasks();
      }) // end done
      .fail(function (error){
        console.log(error);
      }) // end fail
} // end update completed