/* Добавление элементов списка */

var tasks = [];

$( '#new-todo' ).keyup( function( event ) {

    if ( event.keyCode==13 ) {
        $( '#main' ).show();
        $( '#footer' ).show();
        $( '#todo-list' ).append( '<li>\
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

// Checkbox

$( 'li' ).on( 'click', 'input.checkbox', function () {
    $( this ).toggleClass( 'checked' )
})


/* Проверка Checkbox

if ($( 'input.toggle' ).is( ':checked' )) {

}
*/

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
