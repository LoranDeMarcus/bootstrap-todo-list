var tasks = [];
var i = 0;
function updateTasks() {
    var $li = $(this).closest('li');
    $li.remove();
    tasks.forEach(function (title, id, tasks) {
        tasks.splice(i, 1);
    });
    $('#todo-list').append('<li class="completed">\
            <div class="todo-task">\
            <label class="text"><input class="toggle" type="checkbox">'+ tasks[i].title +'</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');
}
/* Добавление элементов списка */

$('#new-todo').keyup(function (event) {
    if (event.keyCode == 13) {
        $('#main').show();
        $('#footer').show();
        //Счетчик задач
        $('.count').text(tasks.length + 1);
        // Добавление в массив
        var $this = $(this);
        var newTask = $this.val();
        tasks.push({id: i++, title: newTask, status: 'active'});
        // Очистка Input
        $('#new-todo').val('');
        updateTasks();
    }
});

/* Checkbox */

$('#todo-list .toggle').on('click', function () {
    $(this).parents('li').toggleClass('checked');
});

$('#toggle-all').on('change', function () {
    if ($('#todo-list .toggle:checked').length == $('#todo-list .toggle').length) {
        $('#todo-list .toggle').prop('checked', false);
        $('#todo-list li').removeClass('checked');
    }
    else {
        $('#todo-list .toggle').prop('checked', true);
        $('#todo-list li').addClass('checked');
    }
});

/* События кнопки Clear Completed */

if ($('.completed').hasClass('checked')) {
    $('#footer').append('<button id="clear-completed">Clear completed</button>');
};

/* Удаление */

$('#todo-list').on('click', 'button.destroy', function () {
    updateTasks();
    $('.count').text(tasks.length);
    if (tasks.length < 1) {
        $('#footer').hide();
    }
});

/* Удаление выбраных задач */

/* Временное хранилище

$('#todo-list').append('<li class="completed">\
            <div class="todo-task">\
            <label class="text"><input class="toggle" type="checkbox">' + $(this).val() + '</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');

 var $li = $(this).closest('li');
 $li.remove();
 tasks.splice($li.index(), 1);
 */