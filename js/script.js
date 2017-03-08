/* Добавление элемента списка */
var tasks = [ ];

$('#new-todo').keyup(function(e){ console.log(e.keyCode);
    if(e.keyCode==13){
        $('#main').show();
        $('#footer').show();
        $('#todo-list').append('<li>\
                <div class="todo-task">\
                  <label><input class="toggle" type="checkbox">'+$(this).val()+'</label>\
                    <button class="destroy"></button>\
                </div>\
           </li>');
    }
});

document.write(tasks.length);

/* Удаление */

$('#todo-list').on('click','button.destroy',function(){
    $(this).parent().parent().remove();
});