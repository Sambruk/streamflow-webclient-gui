// Prototype specific startup scripts
$(function () {
    
    // Event delegation for links
    $('body').on("click", function(e) {
        try {
            // Display an alert dialog when inactive links are clicked.
            if ($(e.target).closest('a').attr('href').match(/(^\/$|\/?xlink-)/)) {
                e.preventDefault();
                alert('Denna länk är inte aktiv i prototypen.');
            }
        } catch (e) {}
    });
    
    // Slide in navigation
    $(".open-toolbar").on("click", function(e) {
      $('.functions-menu').toggleClass('open');
        e.preventDefault();
    });
    
    // Invoke conversations modal window
    var modalWindow = $(".modal-window");
    
    modalWindow.easyModal({
        top: 50,
        overlayOpacity: 0.7,
        overlayColor: "#000",
        closeButtonClass: "modal-close"
    });
    $(".m-convos .block-link").on("click", function(e) {
        modalWindow.trigger('openModal');
        e.preventDefault();
    });
    $(".modal-close").on("click", function(e) {
        $(this).trigger('closeModal');
        e.preventDefault();
    });
    
    // Set height of convo-body
    var modalHeight = $(".modal-window").height();
    var convoBodyHeight = modalHeight / 2; // Set to half of modal-window height
    
    $(".convo-body").css("height", convoBodyHeight);
    
    // Custom select elements (TODO: Find a more accessible replacement)
    $("select").customSelect({customClass:'custom-select'});
    
    // Custom file upload elements
    $("input:file").customFileInput();
    
    // Placeholder support for legacy IE
    $("input, textarea").placeholder();
    
    // Expandable fields (TODO: Template this)
    $(".expandable-field").addClass("active").append("<a href=\"#\" class=\"expand\"><i class=\"glyph icon-arrow-down\"></i><span>Visa mer</span><i class=\"glyph icon-arrow-down\"></i></a>").children(".expandable-content").hide();
    $(".expand").on("click", function(e) {
        $(this).toggleClass("expanded").prevAll(".expandable-content").slideToggle("fast");
        e.preventDefault();
    });
    
});
