$(document).ready(function(){
    //almost everything we do in jquery is to manipulate DOM
    // so we need to make sure we are adding event once document/DOM is ready
    // if you want an event to work on your page then you should call it inside ready method    

    $('div').click(function(){aler('Hello World')})

})