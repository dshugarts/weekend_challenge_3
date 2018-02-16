console.log('JS Sourced');

$(document).ready(onReady);

function onReady() {
    console.log('JQ Sourced');
    getTasks();
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