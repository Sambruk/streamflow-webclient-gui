// Prototype specific startup scripts
$(function () {
    
    // Slide-in navigation menu
    var slideLength = $(".sub-category").outerWidth();
            
    var slideMenu = $(".functions-menu");
            
    slideMenu.css("left", "-"+slideLength+"px");
            
    $(".open-toolbar").on("click", function(e) {
        if (slideMenu.css("left") == "-"+slideLength+"px") {
            slideMenu.animate({ "left" : 0 }, 200)
        } else {
            slideMenu.animate({ "left" : "-200" }, 200)
        }
        e.preventDefault();
    });
    
    // Invoke conversations modal window
    var modalWindow = $(".modal-window");
    
    modalWindow.easyModal({
        overlayOpacity: 0.7,
        overlayColor: "#000",
        closeButtonClass: "modal-close"
    });
    $(".m-convos .block-link").on("click", function(e) {
        modalWindow.trigger('openModal');
        e.preventDefault();
    });
    
});