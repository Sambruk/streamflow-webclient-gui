/**
 * Prototype specific startup scripts
 *
 * @author Fredrik Frodlund
 */
$(function () {
  
  /**
  * Event delegation for links
  */
  $('body').on('click', function (event) {
    try {
      // Display an alert dialog when inactive links are clicked.
      if ($(event.target).closest('a').attr('href').match(/(^\/$|\/?xlink-)/)) {
        event.preventDefault();
        alert('Denna länk är inte aktiv i prototypen.');
      }
    } catch(e) {}
  });
  
  
  /**
  * Slide in navigation
  */
  $('.open-toolbar').on('click', function (event) {
    $('.functions-menu').toggleClass('open');
    event.preventDefault();
  });
  
  
  /**
  * Custom select elements
  */
  $('.cust-sel').customSelect({customClass:'custom-select'});

  // FIXME: The customSelect plugin adds an arbitrary top value of 310px to the following
  // element. Not sure of another fix at the moment.
  $('.choose-type .hasCustomSelect').css({ top: 'inherit' });
  
  
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
  $('.expand').on('click', function (event) {
    $(this).toggleClass('expanded').prevAll('.expandable-content').slideToggle('fast');
    event.preventDefault();
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
  * Superfish dropdown menu
  */
  try {
    $('.buttons ul').superfish();
  } catch (e) {}
  
  /**
  * Accordion
  */
  $('.accordion-content').hide();
  
  $('.accordion .open-acc').on('click', function (event) {
    $('.accordion-content').slideUp('fast');
    $(this).parent().siblings().slideToggle('fast');
    event.preventDefault();
  });
  
  
  /**
  * Toolbar toggle content
  */
  try {
    var $toolbarContent = $('.toolbar-content');
    $toolbarContent.easyModal();

    $('.toolbar .buttons a').on('click', function (event) {
      event.preventDefault();
      $toolbarContent.trigger('openModal');
    });
  } catch (e) {}
  
});
