function appendTaskToList(val){
    $('#theList > ul').prepend(
        "<li>"+
            "<span>" + val + "</span>"+
            "<div class='float-right buttons'>"+
                "<button class='btn doneBtn'><i class='mdi mdi-check'></i></button>"+
                "<button class='btn cancelBtn no-margin'><i class='mdi mdi-delete no-margin'></i></button>"+
            "</div>"+
            "<div class='clr'></div>"+
        "</li>");

}
function addTask() {
    // obtener tarea desde el input
    var taskDesc = $('#taskDescInput').val();

    //agregar al array de tareas
    tasks.push(taskDesc);

    // save to local storage
    localStorage["tasks"] = JSON.stringify(tasks);

    // agregar en la lista
    appendTaskToList(taskDesc)
    // reset input y dar foco
    $('#taskDescInput').val("").focus();
}

$(document).ready(function () {

    if (localStorage['tasks']) {
        tasks = JSON.parse(localStorage['tasks']);
    } else {
        tasks = [];
        $("#emptyList").fadeIn();
    }

    for (var i = 0; i < tasks.length; i++) {
        appendTaskToList(tasks[i]);
    }


    $('#addTaskBtn').click(addTask);
    $('#taskDescInput').keyup(function (e) {
        if (e.keyCode === 13) {
            addTask();
        }
    });

    $('.doneBtn').on('click', function () {
        $($(this).closest('li').children("span")).addClass('done');
    });

    $('.cancelBtn').on('click', function () {
        $(this).closest('li').fadeOut();
    });

});


