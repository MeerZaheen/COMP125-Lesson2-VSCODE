/* main JavaScript file */
// global scope- anything on global scope will give access to the visitor to edit and change
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    var firstParagraph = document.getElementById("firstParagraph");

    // event listener click
    firstParagraph.addEventListener("click", firstParagraphClicked);
        // event listener hover 
    firstParagraph.addEventListener("hover", firstParagraphWasHovered);

    var firstParagraphIsClicked = false;
    var firstParagraphWasHovered = false;

    // code goes in here
    console.log("App Started...");

    var myFirstParaGraph = "This is the first line of my first paragraph." + " This is the second line of my first paragraph.";

    // delare named function
    function writeToFirstParagraph() {
        // for debugging only
        console.log("Executing writeToFirstParagraph");
        // create a reference to a p element with an id of "firstParagraph"

        firstParagraph.textContent = myFirstParaGraph;
    
}
    // event handler for firstParagraphClicked
    function firstParagraphClicked(){
        
        if(firstParagraphIsClicked){
            firstParagraph.style.color = "#000000";
            firstParagraphIsClicked = false;
        }else {
            firstParagraph.style.color = "red";
            firstParagraphIsClicked = true;
        }
}

    // event handler for firstParagraphClicked hover
    function firstParagraphHover(){
        
        if(firstParagraphWasHovered){
            firstParagraph.style.color = "#000000";
            firstParagraphWasHovered = false;
        }else {
            firstParagraph.style.color = "red";
            firstParagraphWasHovered = true;
        }
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