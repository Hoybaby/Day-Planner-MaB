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
    

var time = moment().format('HH')
var timeBlocks = document.getElementsByClassName("schedule ")
var currentBlock = (moment().format('HH'));
var timeSlots = [9,10,11,12,1,2,3,4,5];
// currentBlock = currentBlock - 9;
var saveBtn = $(".saveBtn")

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm: a'));
// console.log(time);



$(".saveBtn").on("click", function(){
    //grab data hour
    //grab userInput
    //save them to local storage
    var dataHour = $(this).attr("data-hour");
    var inputField = $("#" + dataHour).val();
    console.log(inputField);
    localStorage.setItem(dataHour,inputField);

})

// timeSlots = $(".schedule");
// var time = moment.js

// for (var i = 0; i < timeSlots.length; i++) {
//     var getItem = localStorage.getItem(timeSlots[i]);
//     // form - control
//     $("#" + timeSlots[i]).val(dataHour);
// }


// function compareTime() {

    for (var i = 0; i <= 9; i++) {

    var currentHour = parseInt(time)
    var timeSlot = $(".schedule") 

        if (currentHour === timeSlot) {
            timeSlot.addClass("present");
        } else if(currentHour < timeSlot) {
            timeSlot.addClass("past");
        } else {
            timeSlot.addClass("future");
        }
    }

    // $(".schedule").each(function (){

    //     var timeSlot = parseInt($(this).prev().attr("data-hour"))

    //     if ( timeSlot == time) {
    //         $(this).addClass("present");
    //     } else if ( timeSlot < time) {
    //         $(this).addClass("past");
    //     } else {
    //         $(this).addClass("future");
    //     }
    // })


//  if ($(".") === currentBlock) {
//             timeBlocks[i].a
//         }
//     // }
// };  