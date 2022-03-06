let form = document.getElementById("form");
let theDay = document.getElementById("day");
let theMonth = document.getElementById("month");
let theYear = document.getElementById("year");
// let myDay = document.getElementById("day");

let displayAkan = document.querySelector(".akaname");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userGender = form.gender.value;


    if (theDay.value === ""){
        alert("Please enter the day you were born");
    }else{
        if(theDay.value <= 0 || theDay.value >31){
            alert("Enter a valid date")
        }
    }
    
    if (theMonth.value === ""){
        alert("Please enter the Month you were born");
    }else{
        if(theMonth.value <= 0 || theMonth.value >12){
            alert("Enter a valid Month")
        }
    }
    if (theYear.value === ""){
        alert("Please enter the Year you were born");
    }
    if (userGender === ""){
        alert("Please check your gender");
    }

  
 

    var akaName = compareNames(theYear.value, theMonth.value, theDay.value, userGender)

    displayAkan.innerHTML = `Your Akan name is: ${akaName}`;
});


function compareNames(year, month, day, gender){
    var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    if (gender === "male"){
        var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
        
        var dayOfWeek = wkday[date.getDay()];
        
     return male[date.getDay()]
    }else{
        var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
        var dayOfWeek = wkday[date.getDay()];
        return female[date.getDay()]
    }

}

function myFunction() {
    document.getElementById("form").reset();
  }
