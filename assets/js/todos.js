//Check of specific todo's by clicking
$('ul').on('click','li', function(){
        $(this).toggleClass("completed");
});

//Deleting todo's by clicking on X
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding a todo

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing text content from input tag
        var todoText = $(this).val();
        $(this).val("");
        //Create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text'").fadeToggle();
})