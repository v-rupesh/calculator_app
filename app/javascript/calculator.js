document.addEventListener('DOMContentLoaded', function () {
    // This event listener ensures that the code runs after the DOM has finished loading.
  
    let result = document.getElementById('result');
    // 'result' is the input field where the calculator's input and output will be displayed.
  
    let buttons = document.querySelectorAll('.num, .operator');
    // 'buttons' contains all the number and operator buttons on the calculator.
  
    let clearButton = document.getElementById('clear');
    // 'clearButton' is the button that clears the input field.
  
    let calculateButton = document.getElementById('calculate');
    // 'calculateButton' is the button that performs the calculation.
  
    buttons.forEach(button => {
      // This loop iterates through each button in the 'buttons' array.
      button.addEventListener('click', function () {
        // It adds a click event listener to each button.
  
        result.value += button.textContent;
        // When a button is clicked, its text content (e.g., a number or operator)
        // is appended to the current content of the 'result' input field.
      });
    });
  
    clearButton.addEventListener('click', function () {
      // This event listener is attached to the clear button.
      result.value = '';
      // When the clear button is clicked, it sets the value of the 'result' input
      // field to an empty string, effectively clearing the calculator's input.
    });
  
    calculateButton.addEventListener('click', function () {
      // This event listener is attached to the calculate button.
      try {
        result.value = eval(result.value);
        // When the calculate button is clicked, it uses the 'eval' function to
        // evaluate the expression in the 'result' input field and display the result.
        // Note: Using 'eval' can be risky due to security concerns, especially when
        // dealing with user input.
      } catch (error) {
        result.value = 'Error';
        // If an error occurs during evaluation (e.g., invalid expression), an error
        // message is displayed in the 'result' input field.
      }
    });
  });
  