//1. Need to establish time with moment(); js
//2.then we need to establish variables to store information of time blocks
//3. evneutally we are going to have to write if/else statements to compare against moment(); maybe use a loop?
//4. in these loops, if condition is work, style the code block
//5. need a varibale to store current time
//6. then we need to check this variable against current time.
//7 if it is time >= codeblock && time < next hour it is present
//8. need three functions, past, present, future
//. time will be global variable
//code block will be global variable
//use .this with jQuery so codeblock understands it time frame
//9 function compareTime(){
    // 
}


var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);


var time = moment.js


function compareTime() {

    for (var i = 0; i < timeBlock.length; i++) {

        if(timeBlock <= time) {
            $("#9row").addClass("past")
        }
    }
    
}