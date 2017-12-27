
$(document).ready(function() {
  Materialize.updateTextFields();
  $(".button-collapse").sideNav();
});
$(document).ready(function(){
    $('.dropdown-button').dropdown(
        {
            hover: true,
            belowOrigin: true,
            constrainWidth: false
        });

  $('#textarea1').trigger('autoresize');
  $('#close-modal').modal('close');

});

$(document).ready(function() {
    $('select').material_select();
    Materialize.updateTextFields();
    $('.modal').modal();
    $('.datepicker_birth').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 120, // Creates a dropdown of 15 years to control year
    format: 'yyyy-mm-dd',
    min: new Date(1947,3,20),
    max: new Date(1995,11,31)// Creates a dropdown of 15 years to control year
    });
});
$(document).ready(function() {
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 10, // Creates a dropdown of 15 years to control year
    format: 'yyyy-mm-dd'// Creates a dropdown of 15 years to control year
    });
});
