// Prototype specific startup scripts
$(function () {
    
    var slideLength = $(".sub-category").outerWidth();
    
    var slideMenu = $(".functions-menu");
    
    $(slideMenu).css("margin-left", "-"+slideLength+"px");
    
    $(".open-toolbar").on("click", function(e){
        if ( $(slideMenu).css("margin-left") == "-"+slideLength+"px" ) {
            $(slideMenu).animate({ "margin-left" : 0 }, 200)
        } else {
            $(slideMenu).animate({ "margin-left" : "-200" }, 200)
        };
        e.preventDefault();
    });
    
});