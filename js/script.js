"use strict";

const body = document.querySelector("body");
const keypad = document.querySelector(".keypad");
const key = document.querySelectorAll(".keypad__key");
const screen = document.querySelector(".screen");
const btn = document.querySelector(".head__toogle-box-btn");
const circle = document.querySelector(".head__toogle-box-circle");

function themeSelect(
  textcl,
  btnPos,
  cirCl,
  keypadCl,
  bodyCl,
  screenCl,
  btnClr,
  resetDelCl,
  resetDelSha,
  resetDelText,
  equalCl,
  equalSha,
  equalText,
  numCl,
  numSha,
  numText
) {
  body.style.color = `${textcl}`;
  circle.style.alignSelf = `${btnPos}`;
  circle.style.backgroundColor = `${cirCl}`;
  keypad.style.backgroundColor = `${keypadCl}`;
  body.style.backgroundColor = `${bodyCl}`;
  screen.style.backgroundColor = `${screenCl}`;
  btn.style.backgroundColor = `${btnClr}`;

  for (let i = 0; i < key.length; i++) {
    if (
      key[i].className.includes("keypad__keyreset") ||
      key[i].className.includes("keypad__keyclear")
    ) {
      key[i].style.backgroundColor = `${resetDelCl}`;
      key[i].style.boxShadow = `0 2px ${resetDelSha}`;
      key[i].style.color = `${resetDelText}`;
    } else if (key[i].className.includes("keypad__keyequal")) {
      key[i].style.backgroundColor = `${equalCl}`;
      key[i].style.boxShadow = `0 2px ${equalSha}`;
      key[i].style.color = `${equalText}`;
    } else {
      key[i].style.backgroundColor = `${numCl}`;
      key[i].style.boxShadow = `0 2px ${numSha}`;
      key[i].style.color = `${numText}`;
    }
  }
}

function changeTheme() {
  function theme1() {
    themeSelect(
      "#fff",
      "flex-start",
      "hsl(6, 63%, 50%)",
      "hsl(223, 31%, 20%)",
      "hsl(222, 26%, 31%)",
      "hsl(224, 36%, 15%)",
      "hsl(223, 31%, 20%)",
      "hsl(225, 21%, 49%)",
      "hsl(224, 28%, 35%)",
      "hsl(0, 0, 100%)",
      "hsl(6, 63%, 50%)",
      "hsl(6, 70%, 34%)",
      "hsl(0, 0, 100%)",
      "hsl(30, 25%, 89%)",
      "hsl(28, 16%, 65%)",
      "hsl(221, 14%, 31%)"
    );
  }

  function theme2() {
    themeSelect(
      "hsl(60, 10%, 19%)",
      "center",
      "hsl(25, 98%, 40%)",
      "hsl(0, 5%, 81%)",
      "hsl(0, 0%, 90%)",
      "hsl(0, 0%, 93%)",
      "hsl(0, 5%, 81%)",
      "hsl(185, 42%, 37%)",
      "hsl(185, 58%, 25%)",
      "hsl(0, 0, 100%)",
      "hsl(25, 98%, 40%)",
      "hsl(25, 99%, 27%)",
      "hsl(0, 0, 100%)",
      "hsl(45, 7%, 89%)",
      "hsl(35, 11%, 61%)",
      "hsl(60, 10%, 19%)"
    );
  }

  function theme3() {
    themeSelect(
      "hsl(52, 100%, 62%)",
      "flex-end",
      "hsl(176, 100%, 44%)",
      "hsl(268, 71%, 12%)",
      "hsl(268, 75%, 9%)",
      "hsl(268, 71%, 12%)",
      "hsl(268, 71%, 12%)",
      "hsl(268, 47%, 21%)",
      "hsl(290, 70%, 36%)",
      "hsl(0, 0, 100%)",
      "hsl(176, 100%, 44%)",
      "hsl(177, 92%, 70%)",
      "hsl(198, 20%, 13%)",
      "hsl(281, 89%, 26%)",
      "hsl(285, 91%, 52%)",
      "hsl(52, 100%, 62%)"
    );
  }

  if (
    circle.style.alignSelf === "" ||
    circle.style.alignSelf === "flex-start"
  ) {
    console.log(circle.style.alignSelf);
    theme2();
  } else if (circle.style.alignSelf === "center") {
    console.log(circle.style.alignSelf);
    theme3();
  } else if (circle.style.alignSelf === "flex-end") {
    console.log(circle.style.alignSelf);
    theme1();
  }
}

btn.addEventListener("click", changeTheme);

function calculator() {
  let keyprArr = [];
  screen.textContent = "0";
  let leftOper;
  let rightOper;
  let result;
  let operator;

  function numbers() {
    for (const x of key) {
      if (!x.className.includes("non-operand")) {
        x.addEventListener("click", () => {
          keyprArr.push(x.textContent);
          screen.textContent = keyprArr.join("");
        });
      }
    }
  }
  numbers();

  function del() {
    for (const x of key) {
      if (x.className.includes("keypad__keyclear")) {
        x.addEventListener("click", () => {
          keyprArr.pop();
          screen.textContent = keyprArr.length === 0 ? "0" : keyprArr.join("");
        });
      }
    }
  }
  del();

  function reset() {
    for (const x of key) {
      if (x.className.includes("keypad__keyreset")) {
        x.addEventListener("click", () => {
          keyprArr = [];
          screen.textContent = keyprArr.length === 0 ? "0" : keyprArr.join("");
          console.log(keyprArr);
        });
      }
    }
  }
  reset();

  function plus() {
    for (const x of key) {
      if (x.className.includes("keypad__keyplus")) {
        x.addEventListener("click", () => {
          keyprArr = [];
          leftOper = Number(screen.textContent);
          console.log(leftOper);
          //   operator = "+";
          //   if (operator === "+") {
          //   }
        });
      }

      if (keyprArr.length === 0 && !x.className.includes("non-operand")) {
        x.addEventListener("click", () => {
          console.log(keyprArr);
          rightOper = Number(screen.textContent);
          console.log(rightOper);
        });
      }
    }
    // operator = "";
  }
  plus();

  function equal() {
    key[17].addEventListener("click", () => {
      result = leftOper + rightOper;
      console.log(result);
      screen.textContent = result;
      keyprArr = [];
    });
  }

  //   function minus() {
  //     for (const x of key) {
  //       if (x.className.includes("keypad__keyminus")) {
  //         x.addEventListener("click", () => {
  //           keyprArr = [];
  //           leftOper = Number(screen.textContent);
  //           console.log(leftOper);
  //           //   operator = "-";
  //           //   if (operator === "-") {
  //           key[17].addEventListener("click", () => {
  //             rightOper = Number(screen.textContent);
  //             console.log(rightOper);
  //             result = leftOper - rightOper;
  //             console.log(result);
  //             screen.textContent = result;
  //             keyprArr = [];
  //             result = 0;
  //           });
  //           //   }
  //         });
  //       }
  //     }
  //     operator = "";
  //   }
  //   minus();

  //   function divide() {
  //     for (const x of key) {
  //       if (x.className.includes("keypad__keyslash")) {
  //         x.addEventListener("click", () => {
  //           keyprArr = [];
  //           leftOper = Number(screen.textContent);
  //           console.log(leftOper);
  //           //   operator = Number('+');
  //         });
  //       }
  //     }

  //     key[17].addEventListener("click", () => {
  //       rightOper = Number(screen.textContent);
  //       console.log(rightOper);
  //       result = leftOper / rightOper;
  //       console.log(result);
  //       screen.textContent = result;
  //       keyprArr = [];
  //     });
  //   }
  //   divide();
}
calculator();
