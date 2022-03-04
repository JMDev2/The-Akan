let form = document.getElementById("form");
let myYear = document.getElementById("year");
let myMonth = document.getElementById("month");
let myDay = document.getElementById("day");



let displayInfo = document.querySelector(".display")
let displayBirthday = document.querySelector(".birthday");
let displayGender = document.querySelector(".Yourgender");
let displayAkan = document.querySelector(".akaname");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userGender = form.gender.value;

    console.log(`
    ${myYear.value}
    ${myMonth.value}
    ${myDay.value}
    ${userGender}`);

    displayBirthday.innerHTML = `You were born on: ${myDay.value} : ${myMonth.value} :${myYear.value}` ;
    displayGender.innerHTML = `Your Gender is: ${userGender}`;

});