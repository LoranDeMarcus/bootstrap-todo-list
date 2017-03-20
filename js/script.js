var tasks = [];
var i = 0;
function updateTasks () {
    $('#todo-list').remove("li");
    $('#todo-list').append('<li data-id="'+ i +'">\
            <div class="todo-task">\
            <label    class="text"><input class="toggle" type="checkbox">' + $('#new-todo').val() + '</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');

}

/* Добавление задач */

$('#new-todo').keyup(function (event) {
    if (event.keyCode == 13) {
        $('#main').show();
        $('#footer').show();
        $('.count').text(tasks.length + 1);
        // Добавление в массив
        var $this = $(this);
        var newTask = $this.val();
        tasks.push({id: i++, title: newTask, status: 'active'});
        updateTasks();
        // Очистка Input
        $('#new-todo').val('');

    }
});

/* Checkbox */

$('#todo-list label').on('change', function () {
    console.log('id')
    updateTasks();
});

$('#toggle-all').on('change', function () {
    if ($('#todo-list .toggle:checked').length == $('#todo-list .toggle').length) {
        $('#todo-list .toggle').prop('checked', false);
        $('#todo-list li').removeClass('checked');
        $(this).data("status", "active")
    }
    else {
        $('#todo-list .toggle').prop('checked', true);
        $('#todo-list li').addClass('checked');
        $(this).data("status", "checked")
    }
});

/* События кнопки Clear Completed */

if ($('.completed').hasClass('checked')) {
    $('#footer').append('<button id="clear-completed">Clear completed</button>');
}
;

/* Удаление */

$('#todo-list').on('click', 'button.destroy', function () {
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