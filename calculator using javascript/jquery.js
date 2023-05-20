$(document).ready(function() {
    $('.number').click(function() {
      var value = $(this).text();
      $('#display').val(function(i, currentValue) {
        return currentValue + value;
      });
    });

    $('.decimal').click(function() {
      var currentValue = $('#display').val();
      if (currentValue.indexOf('.') === -1) {
        $('#display').val(currentValue + '.');
      }
    });

    $('.clear').click(function() {
      $('#display').val('');
    });

    $('.equal').click(function() {
      var expression = $('#display').val();
      var result = eval(expression);

      if (Number.isFinite(result)) {
        $('#display').val(result);
      } else {
        $('#display').val('Error');
      }
    });
  });