/* Добавление элементов списка */

var tasks = [];

$('#new-todo').keyup(function(event){

    if (event.keyCode==13){
        $('#main').show();
        $('#footer').show();
        $('#todo-list').append('<li>\
                <div class="todo-task">\
                  <label class="text"><input class="toggle" type="checkbox">'+$(this).val()+'</label>\
                    <button class="destroy"></button>\
                </div>\
           </li>');
        // Добавление в массив
        var $this = $(this);
        var newTask = $this.val();
        tasks.push(newTask);
        // Очистка Input
        $('#new-todo').val('');
    }
});

// Счетчик задач
$(".todo-count").append('<strong>' + tasks.length + '</strong> items left');

/* Удаление */

$('#todo-list').on('click','button.destroy', function(){
    var $li = $(this).closest('li');
    tasks.splice($li.index(), 1);
    $li.remove();
    if ( tasks[0] == 0 ) {
        $('#footer').hide();
    }
});
