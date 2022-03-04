let form = document.getElementById("form");
let theDay = document.getElementById("day");
let theMonth = document.getElementById("month");
let theYear = document.getElementById("year");
// let myDay = document.getElementById("day");



let displayInfo = document.querySelector(".display")
let displayBirthday = document.querySelector(".birthday");
let displayGender = document.querySelector(".gender");
let displayAkan = document.querySelector(".akaname");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    compareNames()

    let userGender = form.gender.value;

    console.log(`
    ${theDay.value}
    ${theMonth.value}
    ${theYear.value}
    ${userGender}`);



    

    displayBirthday.innerHTML = `Your birth date is: ${theDay.value} ${theMonth.value} ${theYear.value}` ;
    displayGender.innerHTML = `You Gender is: ${userGender}`;

});


function compareNames(){
    var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    var date = new Date(year + ", " + month + ", " + day)
    var dayOfWeek = wkday[date.getDay()];

    


}