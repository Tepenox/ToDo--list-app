
$("input[type ='text']").on("keypress", function (e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $("#todos").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>") //!!!
        $(this).val("");
    }

});


$("ul").on("click", "li", function () { //when an li is inside this ul run this code we choosed an ul because it s the parent element of the li and it s allready exist when the page loads
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(400, function () { //time parameter should be with no semi colons
        $(this).remove();
    });
    e.stopPropagation(); //to stop event buubbling
});


$("#plusIcon").on("click", function () {

    $("input[type ='text']").fadeToggle(500,function () {
        
    })
})

