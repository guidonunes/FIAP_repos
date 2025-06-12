let currentDate = new Date();

console.log(currentDate);


let day = currentDate.getDate();

if (day < 10) {
  console.log(`0${day}`);
}
console.log(day);


let dayOfWeek = currentDate.getDay();

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

}


let month = currentDate.getMonth() + 1; // Months are zero-indexed

if (month < 10) {
  console.log(`0${month}`);
}

switch(month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
}


let year = currentDate.getFullYear();
console.log(year);


let hour = currentDate.getHours();
if (hour < 10) {
  console.log(`0${hour}`);
}

let minute = currentDate.getMinutes();
if (minute < 10) {
  console.log(`0${minute}`);
}
console.log(` todya is  ${month}, ${day} ${hour}:${minute}`);
