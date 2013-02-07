// Prototype specific startup scripts
$(function () {
    
    $(".open-toolbar").on("click", function(e) {
      $('.functions-menu').toggleClass('open');
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
