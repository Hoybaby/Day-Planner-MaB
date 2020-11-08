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
//9. function compareTime(){
    

var time = moment().format('MMMM Do YYYY, h:mm:ss a')


$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm: a'));
// console.log(time);

var saveBtn = $(".saveBtn")

$(".saveBtn").on("click", function(){
    //grab data hour
    //grab userInput
    //save them to local storage
    var dataHour = $(this).attr("data-hour");
    var inputField = $("#" + dataHour).val();
    console.log(inputField);
    localStorage.setItem(dataHour,inputField);

})

var timeSlots = [9, 10, 11, 12 , 1, 2, 3,4,5];

// timeSlots = $(".schedule");
// var time = moment.js

function compareTime() {

    for (var i = 0; i < timeSlots.length; i++) {

        if(timeBlock <= time) {
            $("#9row").addClass("past")
        }
    }
};  