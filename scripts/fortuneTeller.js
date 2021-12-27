//EXERCISE 1, THE FORTUNE TELLER.

//My variables

let numOfChildren = 3;
let spouse = "Cutie";
let whereIStay = "Johannesburg";
let proffession = "Web developer";

//logging to the console

console.log("You will be a " + proffession + " in " + whereIStay + " , and married to " + spouse + " with " + numOfChildren + " kids.");

//outputting the sentence

//_________________________________END____________________________________________________________________________________________________

// the fortune teller function
function tellFortune(jobTitle,whereYouStay,fianceName,numOfKids){
    const fortune = "You will be a " + jobTitle + " in " + whereYouStay + " , and married to " + fianceName + " " + " with " + numOfKids + " kids.";
    console.log(fortune);
}

tellFortune("developer","Johannesburg","Cutie",3);
tellFortune("specialist","Mumbai","Rose",2);
tellFortune("sportsman","Canada","Lila",1);



