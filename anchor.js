$(document).ready(function () {
  location.hash && $(location.hash + '.collapse').collapse('show');
});

jQuery(function ($) {
    //accordion
    $('#open-accordion-dance a').on('click', function(event){
        $('#my-accordian .et_pb_accordion_item_1 .et_pb_toggle_title').click();
        $("html, body").animate({ scrollTop: $('#my-accordian').offset().top }, 1000);
    });
    //tab
    $('#open-tab-dance a').on('click', function(event){
        $('#my-tabs .et_pb_tabs_controls .et_pb_tab_1 a').click();
        $("html, body").animate({ scrollTop: $('#my-tabs').offset().top }, 1000);
    });
});
