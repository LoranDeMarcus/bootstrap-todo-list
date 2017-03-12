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
    var index = $(this).parent().find('label').text();
    if( tasks.indexOf(index) > -1 ){
        tasks.splice( tasks.indexOf( index ), 1);
        $(this).parent().parent().remove();
    }
    if ( tasks.indexOf(index) < 1 ) {
        $('#footer').hide();
    }
});

