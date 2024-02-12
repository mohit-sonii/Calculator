let string = "";

const ansDisplay = document.querySelector(".input");

window.onload = removetextborder = () => {
     ansDisplay.focus();
     ansDisplay.style.pointerEvents = "none";
};

// Let the user enter the numbers via keyboard also, in this code i will allow the numbers from keyboard but restrict any other symbole and characters
// ansDisplay.addEventListener("keyup", (e) => {
//      //allowing 0-9
//      // ansDisplay.value += e.key

//      if (e.key >= "0" && e.key <= "9") {
//           //allow the key
//           string += e.key;
//           ansDisplay.value = string;
//      } else if (e.key == "Backspace") {
//           del();
//      } else if (e.key == "Enter") {
//           isEqualTo();
//      } else {
//           e.preventDefault();
//      }
//      ansDisplay.focus();
// });

// created a new listener for backspace icon. as the icon class was not properly working with del()
document.querySelector("#backspace").addEventListener("click", () => {
     del();
});

//created a new listener for divide icon
document.getElementById("div").addEventListener("click", () => {
     operations("/");
});


//created a new listener for percent
document.querySelector("#percent").addEventListener("click", () => {
     operations("%");
});

//created a new listener for minus
document.querySelector("#minus").addEventListener("click", () => {
     operations("-");
});

//created a new listener for plus
document.querySelector("#plus").addEventListener("click", () => {
     operations("+");
});

//created a new listener for square root
document.querySelector("#root").addEventListener("click", () => {
     operations("√");
});

//crated a new listener for multiply
document.querySelector("#mul").addEventListener("click", () => {
     operations("*");
});

//created a new listener for cubic root
document.getElementById("cubic").addEventListener("click", () => {
     operations('3√')
})

//created a new listener for equal
document.getElementById("equal").addEventListener("click", () => {
     isEqualTo();
});

//created a new listener for exponentional
document.getElementById("expo").addEventListener("click", () => {
     operations("^");
});
//created a new listener for Pi
document.getElementById("pi").addEventListener('click', () => {
     operations('π')
})
//created  a new listener for 10 to the power
document.getElementById("tenX").addEventListener('click', () => {
     operations('10^')
})
//create a new listener for abs
document.getElementById("abs").addEventListener('click', () => {
     string += "abs("
     // var ran = 4
     ansDisplay.value = string
     // ansDisplay.setSelectionRange(ran, ran)
     ansDisplay.focus()
})
// create a new listener for e
document.getElementById("e").addEventListener('click', () => {
     operations('e^')
})

//create a new listener for log
document.getElementById("log").addEventListener('click', () => {
     operations('log')
})

//listener for factorial
document.getElementById("fact").addEventListener('click', () => {
     try {
          if (ansDisplay.value === "") {
               ansDisplay.value = "Please Enter a number first"
               all_clear()
          }
          else {
               operations('!')
          }
     }
     catch {
          ansDisplay.value = "Not a number"
          all_clear()
     }
})
//listener for sin 
document.getElementById("sin").addEventListener('click', () => {
     operations('sin')
})

//cos listener
document.getElementById("cos").addEventListener('click', () => {
     operations('cos')
})

//tan listener
document.getElementById('tan').addEventListener('click', () => {
     operations('tan')
})

//right shift listener
document.getElementById("rightShift").addEventListener('click', () => {
     if (ansDisplay === "") {
          ansDisplay.value = "Enter a number first"
          all_clear()
     }
     else {
          operations('>>')
     }
})

//left shift listener
document.getElementById("leftShift").addEventListener('click', () => {
     if (ansDisplay === "") {
          ansDisplay.value = "Enter a number first"
          all_clear()
     }
     else {
          operations('<<')
     }
})

//one-x listener
document.getElementById("one-x").addEventListener('click', () => {
     operations('1/')
})

//two-x listener
document.getElementById("two-x").addEventListener('click', () => {
     operations('2^')
})

// square listener
document.getElementById("square").addEventListener('click', () => {
     try {
          if (ansDisplay.value === "") {
               ansDisplay.value = "Enter a number first"
               all_clear()
          }
          else {
               let num = string.length
               try {
                    let convert = parseFloat(string.slice(0, num))
                    let sqr = convert * convert
                    ansDisplay.value = sqr
                    return ansDisplay
               }
               catch {
                    ansDisplay.value = "Enter correct Number"
                    all_clear()
               }
          }
     }
     catch {
          ansDisplay.value = "Not a number"
          all_clear()
     }
})

//cube listener
document.getElementById("cube").addEventListener('click', () => {
     try {
          if (ansDisplay.value === "") {
               ansDisplay.value = "Enter a number first "
               all_clear()
          }
          else {
               let num = string.length
               try {
                    let convert = parseFloat(string.slice(0, num))
                    let cube = convert * convert * convert
                    ansDisplay.value = cube
                    return ansDisplay
               }
               catch {
                    ansDisplay.value = "Enter correct Number"
                    all_clear()
               }
          }
     }
     catch {
          ansDisplay.value = "Not a number"
          all_clear()
     }
})


function operations(val) {
     string += val;
     return (ansDisplay.value = string);
}


function isEqualTo() {
     try {
          if (string.includes("^")) {
               const rel = eval(string.replace(/\^/g, "**"));
               if (string.includes("e")) {
                    const e_val = string.replace(/\e/g, Math.E).replace(/\^/g, '**')
                    ansDisplay.value = eval(e_val)
               }
               else {
                    ansDisplay.value = rel;
               }
               return ansDisplay;
          }
          else if (string.includes(">>")) {
               let len = string.length - 1
               var right = ""
               var left = ""

               for (let i = 0; i <= len; i++) {
                    if (string[i] != '>') {
                         left += string[i]
                    }
                    else {
                         break;
                    }
               }

               for (let i = len; i >= 0; i--) {
                    if (string[i] != '>') {
                         right += string[i]
                    }
                    else {
                         break;
                    }
               }
               var left_num = parseInt(left)
               var right_num = parseInt(right)
               let rightShift = left_num >> right_num
               ansDisplay.value = rightShift
               return ansDisplay
          }
          else if (string.includes("<<")) {
               let len = string.length - 1
               var right_another = ""
               var left_another = ""

               for (let i = 0; i <= len; i++) {
                    if (string[i] != '<') {
                         left_another += string[i]
                    }
                    else {
                         break;
                    }
               }

               for (let i = len; i >= 0; i--) {
                    if (string[i] != '<') {
                         right_another += string[i]
                    }
                    else {
                         break;
                    }
               }
               var left_left = parseInt(left_another)
               var right_left = parseInt(right_another)
               let leftShift = left_left << right_left
               ansDisplay.value = leftShift
               return ansDisplay
          }
          else if (string.startsWith('sin') || string.startsWith('cos') || string.startsWith('tan')) {
               let newStr = parseFloat(string.slice(3))
               const fun = trigonometry(newStr)
               ansDisplay.value = fun
               return ansDisplay
          }
          else if (string.includes('!')) {
               let len = string.length
               let newStr = parseInt(string.slice(0, len - 1))
               factorial(newStr)
          }
          else if (string.includes('log')) {
               const log_num = parseFloat(string.slice(3))
               const log_rel = Math.log10(log_num)
               ansDisplay.value = log_rel
               return ansDisplay
          }
          else if (string.includes("%")) {
               const per = eval(string)
               ansDisplay.value = per;
               return ansDisplay;
          } else if (string.includes("√")) {
               let num = string.indexOf('√')
               const root_number = parseFloat(string.substring(num + 1));
               if (!isNaN(root_number)) {
                    const rt = Math.sqrt(root_number);
                    ansDisplay.value = rt;
                    return ansDisplay;
               } else {
                    ansDisplay.value = "Error";
                    all_clear();
               }
          } else if (string.substring(0, 2) === "3√") {
               const cube_number = parseFloat(string.substring(2));
               if (!isNaN(cube_number)) {
                    const cube_ans = Math.cbrt(cube_number);
                    ansDisplay.value = cube_ans;
                    return ansDisplay;
               } else {
                    ansDisplay.value = "Error";
                    all_clear();
               }
          } else if (string.includes("π")) {
               const pi_value = string.replace(/\π/g, Math.PI)
               const pi_rel = eval(pi_value)
               ansDisplay.value = pi_rel
               return ansDisplay
          }
          else if (string.includes("abs(")) {
               const abs_sep = string.slice(4)
               const abs_rel = eval(abs_sep)
               ansDisplay.value = Math.abs(abs_rel)
               return ansDisplay
          }
          else {
               string = eval(string);
               ansDisplay.value = string;
               return ansDisplay
          }
     } catch {
          ansDisplay.value = "Invalid Number";
          all_clear();
     }
}
function trigonometry(newStr) {
     if (string.includes('sin')) {
          var val = Math.sin(newStr)
     }
     else if (string.includes('cos')) {
          var val = Math.cos(newStr)
     }
     else {
          var val = Math.tan(newStr)
     }
     return val
}
function factorial(number) {
     let fact = 1
     for (let i = 1; i <= number; i++) {
          fact *= i
     }
     ansDisplay.value = fact
     return ansDisplay
}
function del() {
     string = string.slice(0, -1);
     ansDisplay.value = string;
     return ansDisplay;
}
function all_clear() {
     setTimeout(() => {
          string = "";
          ansDisplay.value = string;
          ansDisplay.focus();
     }, 2000);
}
let numbers = document.querySelectorAll(".int");
Array.from(numbers).forEach((num) => {
     num.addEventListener("click", (e) => {
          string += e.target.innerHTML;
          ansDisplay.value = string;
          return ansDisplay;
     });
     ansDisplay.focus();
});

let operate = document.querySelectorAll(".operate");
Array.from(operate).forEach((op) => {
     op.addEventListener("click", (e) => {
          if (e.target.innerHTML === "AC") {
               string = "";
               ansDisplay.value = string;
               return ansDisplay;
          }
          if (e.target.innerHTML === ")" || e.target.innerHTML === "(") {
               string += e.target.innerHTML;
               ansDisplay.value = string;
               return ansDisplay;
          }
     });
});

const scientific = document.querySelector(".scientific");

scientific.addEventListener("click", () => {
     let sci = document.querySelector(".scientific")
     const buttons = document.getElementsByTagName("button");
     const toggleButton = document.getElementsByClassName("toggle");
     Array.from(toggleButton).forEach((button) => {
          button.classList.toggle("hidden");
          if (button.classList.contains("hidden")) {
               Array.from(buttons).forEach((button) => {
                    button.style.width = "5.4rem";
                    button.style.height = "5.4rem";
                    button.style.fontSize = "1.8rem";
                    button.style.borderRadius = "1rem"
               })
               sci.style.backgroundColor = "#3b3b3b"
               sci.style.color = "#fff"
          }
          else {
               Array.from(buttons).forEach((button) => {
                    button.style.width = "4rem";
                    button.style.height = "4rem";
                    button.style.fontSize = "1.2rem";
                    button.style.borderRadius = ".5rem"
               });
               sci.style.backgroundColor = "#76B9ED"
               sci.style.color = "#202020"
          }
     });
     ansDisplay.focus()
});
