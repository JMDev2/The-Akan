let form = document.getElementById("form");
let theDay = document.getElementById("day");
let theMonth = document.getElementById("month");
let theYear = document.getElementById("year");
// let myDay = document.getElementById("day");

let displayAkan = document.querySelector(".akaname");

// function validate() {
//     var genders = document.getElementsById("gender");
//     if( document.form.year.value == "" || document.form.theYear.value.length !=4 || document.form.theYear.value >2100 || document.form.theYear.value <=1900) {
//        alert( "Please provide a valid year of birth! eg 2019" );
//        document.form.theYear.focus() ;
//        return false;
//     }
//     else if( document.form.theMonth.value == "" || isNaN( document.form.theMonth.value ) || 
//     document.form.theMonth.value.length != 2 || document.form.month.value > 12  || document.form.theMonth.value <= 0){
//        alert( "Please provide your month of birth! between 1 and 12" );
//        document.form.month.focus() ;
//        return false;
//     }
//     else if( document.form.theDay.value == "" || isNaN( document.form.theDay.value ) || 
//     document.form.theDay.value.length != 2|| document.form.theDay.value > 31 || document.form.theDay.value <= 0) {
//        alert( "Please provide a valid date that you were born in!" );
//        document.form.day.focus() ;
//        return false;
//     }
//     else if(genders[0].checked==false && genders[1].checked==false ) {
//         alert("You must select male or female");
//         return false;
//     }   
//     else{
//       return true ;
//     }
    
//   }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userGender = form.gender.value;

    var akaName = compareNames(theYear.value, theMonth.value, theDay.value, userGender)

    displayAkan.innerHTML = `Your Akan name is: ${akaName}`;
});


function compareNames(year, month, day, gender){
    var wkday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    if (gender === "male"){
        var date = new Date(parseInt(year), parseInt(month), parseInt(day))
        var dayOfWeek = wkday[date.getDay()];
     return male[date.getDay()]
    }else{
        var date = new Date(parseInt(year), parseInt(month), parseInt(day))
        var dayOfWeek = wkday[date.getDay()];
        return female[date.getDay()]
    }

}