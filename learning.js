// const day = prompt("Enter the day name to check the menu");

// switch (day) {
//   case "monday":
//     console.log("Poha");
//     break;
//   case "tuesday":
//     console.log("Vedai");
//     break;
//   case "wednesday":
//     console.log("Dosa");
//     break;
//   case "thursday":
//     console.log("parathe");
//     break;
//   case "friday":
//     console.log("Upma");
//     break;
//   case "saturday":
//     console.log("Idli");
//     break;
//   case "sunday":
//     console.log("Sabudana Khichdi");
//     break;
//   default:
//     console.log("Please enter a valid day name (e.g., Monday, Tuesday).");
// }

  //  const dayName = prompt("enter day");
//
  //  if (dayName==="monday") {
  //    console.log("poha");
  //  } else if (dayName==='tuesday') {
  //    console.log("vedai");
  //  } else if (dayName==='wednesday') {
  //    console.log("dosa");
  //  } else if (dayName==='thursday') {
  //    console.log("parathe");
  //  } else if (dayName==='friday') {
  //    console.log("upma");
  //  } else if (dayName==='saturday') {
  //    console.log("idli");
  //  } else if (dayName==='sunday') {
  //    console.log ("sabudana khichdi");
  //  } else {
  //    console.log("please enter a valid day name (e.g., monday, tuesday).");
  //  }


// project = calculator

function calculator(num1,operator,num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "^2":
      return num1 ** 2;
    case "^3":
      return num1 ** 3;

    default:
      return "Invalid operator";
  }
}

const num1 = Number(prompt("Enter first number"));
const operator = prompt("Enter operator");
const num2 = operator === "^2"  || operator === "^3" ? null : Number(prompt("Enter second number"));

// function calling
const result = calculator(num1,operator,num2);
console.log(result);


