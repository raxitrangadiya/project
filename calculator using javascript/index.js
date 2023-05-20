function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    const result = eval(expression);

    if (Number.isFinite(result)) {
      display.value = result;
    } else {
      display.value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }