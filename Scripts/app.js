/* main JavaScript file */
// global scope- anything on global scope will give access to the visitor to edit and change
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";


// code goes in here
console.log("App Started...");



// delare named function
function writeToFirstParagraph() {
    // for debugging only
    console.log("Executing writeToFirstParagraph");
    // create a reference to a p element with an id of "firstParagraph"
var firstParagraph = document.getElementById("firstParagraph");

firstParagraph.textContent = "It's alive!!!";
    
}

// execute function

/*
// declare a variable that points to anonymous function
var writeToFirstParagraph = function writeToFirstParagraph() {
    // for debugging only
    console.log("Executing writeToFirstParagraph");
    // create a reference to a p element with an id of "firstParagraph"
    var firstParagraph = document.getElementById("firstParagraph");

    firstParagraph.textContent = "It's alive!!!";
    
}
*/

// execute function
writeToFirstParagraph();

// console.log(firstParagraph);
    
    
})();