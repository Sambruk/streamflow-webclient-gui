// Prototype specific startup scripts
$(function () {
    
    var slideLength = $(".sub-category").outerWidth();
    
    var slideMenu = $(".functions-menu");
    
    $(slideMenu).css("left", "-"+slideLength+"px");
    
    $(".open-toolbar").on("click", function(e){
        if ( $(slideMenu).css("left") == "-"+slideLength+"px" ) {
            $(slideMenu).animate({ "left" : 0 }, 200)
        } else {
            $(slideMenu).animate({ "left" : "-200" }, 200)
        };
        e.preventDefault();
    });
    
});