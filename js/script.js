/* Добавление задач */

$('#new-todo').keyup(function (event) {
    if ((event.keyCode == 13)) {
        if ($(this).val() !== '') {
            $('#main').show();
            $('#footer').show();
            $('#todo-list').append('<li class="complete">\
            <div class="todo-task">\
            <label class="text"><input class="toggle" type="checkbox">' + $(this).val() + '</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');
            var count = $('#todo-list').find('li');
            $('.count').text(count.length);
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
    if ($('li.complete').hasClass('checked')) {
        $('#clear-completed').show();
    }
    if (!$('li.complete').hasClass('checked')) {
        $('#clear-completed').hide();
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
    if ($('li.complete').hasClass('checked')) {
        $('#clear-completed').show();
    }
    if (!$('li.complete').hasClass('checked')) {
        $('#clear-completed').hide();
    }
});


/* События отображения событий */

$('.show-all-tasks').on('click', function() {
    $('li.complete').each(function () {
        $(this).show();
    })
});

$('.show-active-tasks').on('click', function() {
    $('input:not(:checked)').parents('li').show();
    $('input:checked').parents('li').hide();
});

$('.show-completed-tasks').on('click', function() {
    $('input:not(:checked)').parents('li').hide();
    $('input:checked').parents('li').show();
});

/* События кнопки Clear Completed */

$('#clear-completed').on('click', function () {
    $('input:checked').parents('li').remove();
});

/* Удаление */

$('#todo-list').on('click', 'button.destroy', function () {
    var $li = $(this).closest('li');
    $li.remove();
    var count = $('#todo-list').find('li');
    $('.count').text(count.length);
    if (count.length < 1) {
        $('#footer').hide();
    }
});