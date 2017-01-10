var oldConsole = console.log,
    outputElement = document.getElementById('console');

/* Override the console log functionality */
function initConsole(useDefault) {
  if (!useDefault) {
     console.log = function (message) {
         if (typeof message == 'object') {
             outputElement.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '&#13;&#10;';
         } else {
             outputElement.innerHTML += message + '&#13;&#10;';
         }
     }
   } else {
     console.log = oldConsole;
   }
}

 /* Clear the console on button click */
 function clearConsole() {
   outputElement.innerHTML = '';
 }

 /* Toggle using the on screen console */
 $('#toggle-console').change(function() {
    if ($(this).prop('checked')) {
      outputElement.classList.remove("disabled");
      initConsole(false);
    } else {
      outputElement.classList.add("disabled");
      initConsole(true);
    }
 });

/* First run initialise the on screen console */
initConsole(false);
