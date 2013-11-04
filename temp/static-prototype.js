/**
 * Prototype specific startup scripts
 *
 * @author Fredrik Frodlund
 */
$(function() {
  
  /**
  * Event delegation for links
  */
  $('body').on('click', function(e) {
    try {
      // Display an alert dialog when inactive links are clicked.
      if ($(e.target).closest('a').attr('href').match(/(^\/$|\/?xlink-)/)) {
        e.preventDefault();
        alert('Denna länk är inte aktiv i prototypen.');
      }
    } catch(e) {}
  });
  
  
  /**
  * Slide in navigation
  */
  $('.open-toolbar').on('click', function(e) {
    $('.functions-menu').toggleClass('open');
    e.preventDefault();
  });
  
  
  /**
  * Custom select elements
  */
  $('.cust-sel').customSelect({customClass:'custom-select'});
  
  
  /**
  * Custom file upload elements
  */
  $('input:file').customFileInput();
  
  
  /**
  * Placeholder support for legacy IE
  */
  $('input, textarea').placeholder();
  
  
  /**
  * Expandable fields
  * TODO: Find a templating system
  */
  $('.expandable-field')
  .addClass('active')
  .append('<a href="#" class="expand"><i class="glyph icon-arrow-down"></i><span>Visa mer</span><i class="glyph icon-arrow-down"></i></a>')
  .children('.expandable-content')
  .hide();
  $('.expand').on('click', function(e) {
    $(this).toggleClass('expanded').prevAll('.expandable-content').slideToggle('fast');
    e.preventDefault();
  });
  
  
  /**
  * Date picker
  */
  try {
    $('.datepicker').pickadate({
      format: 'yyyy-mm-dd',
    });
  } catch(e) {}
  
  
  /**
  * Fix toolbar on scroll
  */
  // var sidebar     = $('.toolbar'), 
  // view        = $(window),
  // offset      = sidebar.offset();
  
  // view.scroll(function() {
  //   var contentSecondaryWidth = $('.content-secondary').width();
  //   try {
  //     if (view.scrollTop() > offset.top - 76) {
  //       sidebar.addClass('fixed').css('width', contentSecondaryWidth);
  //     } else {
  //       sidebar.removeClass('fixed').removeAttr('style');
  //     }
  //   } catch(e) {}
  // });
  
  
  /**
  * Superfish dropdown menu
  */
  try {
    $('.buttons ul').superfish();
  } catch (e) {}
  
  /**
  * Accordion
  */
  $('.accordion-content').hide();
  
  $('.accordion .open-acc').on('click', function(e){
    $('.accordion-content').slideUp('fast');
    $(this).parent().siblings().slideToggle('fast');
    e.preventDefault();
  });
  
  
  /**
  * Toolbar toggle content
  */
  var toolbarContent = $('.toolbar-content');
  toolbarContent.hide();
  
  $('.buttons a').on('click', function(e){
    toolbarContent.slideToggle('fast');
    e.preventDefault();
  });
  
});
