$(document).ready(callback)

function callback(){
    //now document is ready just play with it
    $('div').click(clickCallback);
}
function clickCallback() {
    alert("hello world")
}