// alert("what is going on today");



// What do you need to do here
// When the user submits the form, write the values they entered to the bottom of the html page.
// I think what it want to do it put the information that they just put in the form at the bottom of the page. 

// what do I need to do today 
// I need to get the form first that I can get the information


// I need need something to add that there done(I think that would be on the button that I made at the bottom)
// get the form id 

// let uInformation = document.querySelector("userInformation"); // the form the
// I need to know that there done with there
let doneMakingMyAccount = document.getElementById("done"); 


 
// I think that I need to get all the is and the information
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("eMail");
let pWord = document.getElementById("pWord");
let confirm = document.getElementById("confirm");


let allInformation = [fName,lName,eMail,pWord,confirm]

allInformation = uInformation; 

doneMakingMyAccount.addEventListener("click",(evt) =>{
 
    evt.preventDefault();//This keeps the computer from doing its default settings!!!
    // I just want to do a check!!!!!
    // alert("done");
  //console.log("done");
  console.log(uInformation);

});

console.log(uInformation);


