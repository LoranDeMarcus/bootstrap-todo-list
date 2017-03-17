/* Добавление элементов списка */

var tasks = [];

$( '#new-todo' ).keyup( function( event ) {
    if ( event.keyCode==13 ) {
        $( '#main' ).show();
        $( '#footer' ).show();
        $( '#todo-list' ).append( '<li class="taker">\
            <div class="todo-task">\
            <label class="text"><input class="toggle" type="checkbox">'+$( this ).val()+'</label>\
            <button class="destroy"></button>\
            </div>\
            </li>');
        //Счетчик задач
        $( 'strong' ).text( tasks.length + 1 );
        // Добавление в массив
        var $this = $( this );
        var newTask = $this.val();
        tasks.push( newTask );
        // Очистка Input
        $( '#new-todo' ).val('');
    }
});

/* Checkbox */

$( '#todo-list .toggle' ).on( 'click', function () {
    $( this ).parents( 'li' ).toggleClass( 'checked' );
});

$( '#toggle-all' ).on( 'change', function() {
    if($( '#todo-list .toggle:checked' ).length == $( '#todo-list .toggle' ).length){
        $( '#todo-list .toggle' ).prop( 'checked', false );
        $( '#todo-list li' ).removeClass( 'checked' );
    } else {
        $( '#todo-list .toggle' ).prop( 'checked', true );
        $( '#todo-list li' ).addClass( 'checked' );}
});

/* События кнопки Clear Completed */
if ($( 'li' ).hasClass( 'checked' )) {
    $( '#footer' ).append( '<button id="clear-completed">Clear completed</button>' );
};

/* Удаление */

$( '#todo-list' ).on( 'click','button.destroy', function() {
    var $li = $( this ).closest( 'li' );
    tasks.splice( $li.index(), 1 );
    $li.remove();
    $( 'strong' ).text( tasks.length );
    if ( tasks.length < 1 ) {
        $( '#footer' ).hide();
    }
});

/* Удаление выбраных задач */


