const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0



function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)

  let index = 0
  // Write your JavaScript code inside the init() function
<<<<<<< HEAD
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

      if (key === code[index]) {
        index++;

        if (index === code.length) {
          alert('KONAMI WIN! You rock!')

           index = 0;
        }
      } else {
        index = 0
      }


    }

=======
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which || e.detail || e.location)

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('KONAMI WIN! You rock!')

         index = 0;
      }
    } else {
      index = 0
    }


  }
>>>>>>> a94016fc4d8a95836f3ffbd890aa83b6e1b71044
}
