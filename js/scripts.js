$(document).ready(function() {
  $("form#celebform").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (gender === 'male' && age < 26) {
      $('#youngfemale').show();
    }
      else if (gender === 'male' && age > 26) {
      $('#oldfemale').show();
    } else if (gender === 'male' && age < 26) {
      $('#youngfemale').show();
    } else if (gender === 'female' && age > 26) {
      $('#oldmale').show();
    } else {
      $('#youngmale').show();
    } 

  });
});    
