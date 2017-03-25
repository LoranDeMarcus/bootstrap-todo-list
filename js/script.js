var tasks = [];
var i = 0;

/* Добавление задач */

$('#new-todo').keyup(function (event) {
    if ((event.keyCode == 13)) {
        if ($(this).val() !== '') {
            $('#main').show();
            $('#footer').show();
            $('#todo-list').append('<li class="complete" data-id="' + i + '">\
            <div class="todo-task">\
            <label class="text"><input class="toggle" type="checkbox">' + $(this).val() + '</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');
            // Добавление в массив
            var $this = $(this);
            var newTask = $this.val();
            tasks.push({id: i++, title: newTask, status: 'active'});
            $('.count').text(tasks.length + 1);
            // Очистка Input
            $('#new-todo').val('');
        }
        else {
            return false;
        }
    }
});

/* Checkbox */

$('#todo-list').on('click', '.toggle', function() {
    $(this).parents('li').toggleClass('checked');
    if( $('#todo-list .toggle:checked').length == $('#todo-list .toggle').length ){
        $('#toggle-all').prop('checked', true);
    } else {
        $('#toggle-all').prop('checked', false);
    }
    for (i in tasks) {
        if ($('li .toggle').hasClass('checked')) {
            var taskId = $(this).data('id');
            taskId.data('status', 'completed');
            console.log(tasks);
        }
    }

});

$('#toggle-all').on('click', function () {
    if ($('#todo-list .toggle:checked').length == $('#todo-list .toggle').length) {
        $('#todo-list .toggle').prop('checked', false);
        $('#todo-list li').removeClass('checked');
    } else {
        $('#todo-list .toggle').prop('checked', true);
        $('#todo-list li').addClass('checked');
    }
});

/* События кнопки Clear Completed */

if ($('li.complete').hasClass('checked')) {
    $('#footer').append('<button id="clear-completed">Clear completed</button>');
};

/* Удаление */

$('#todo-list').on('click', 'button.destroy', function () {
    var $li = $(this).closest('li');
    $li.remove();
    tasks.splice($li.index(), 1);
    $('.count').text(tasks.length);
    if (tasks.length < 1) {
        $('#footer').hide();
    }
});