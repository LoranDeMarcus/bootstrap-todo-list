/* Добавление элементов списка */

var tasks = [];

$('#new-todo').keyup(function(e){ console.log(e.keyCode);

    if (e.keyCode==13){
        var $this = $(this);
        $('#main').show();
        $('#footer').show();
        $('#todo-list').append('<li>\
                <div class="todo-task">\
                  <label class="text"><input class="toggle" type="checkbox">'+$(this).val()+'</label>\
                    <button class="destroy"></button>\
                </div>\
           </li>');
        // Добавление в массив
        tasks.push($this.val());
        // Очистка Input
        $('#new-todo').val('');
    }
});

/* Удаление */

$('#todo-list').on('click','button.destroy', function(){
    $(this).parent().parent().remove();
});

