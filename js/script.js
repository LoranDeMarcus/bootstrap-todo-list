/* Добавление элемента списка */

$('#new-todo').keyup(function(e){ console.log(e.keyCode);
    if(e.keyCode==13){
        $('#main').show();
        $('#todo-list').append('<li>\
                <div class="view">\
                    <input class="toggle" type="checkbox">'+$(this).val()+'<label> </label>\
                    <button class="destroy"></button>\
                </div>\
           </li>');
    }
});

/* Удаление */

$('#todo-list').on('click','button.delete',function(){
    $(this).parent().parent().remove();
});