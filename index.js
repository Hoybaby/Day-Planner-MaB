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
var timeSlots = [9,10,11,12,13,14,15,16,17];
// currentBlock = currentBlock - 9;
var saveBtn = $(".saveBtn")

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm: a'));
// console.log(time);

// $("*[#]").each(function(){
//     var dataHour = $(this).attr("data-hour");
//     var inputField = $("#" + dataHour).val();
//     $(this).val(localStorage.getItem(inputField + $(this).attr("data-hour")));

// });
$("#9").val(localStorage.getItem("9"));



$(".saveBtn").on("click", function(){
    //grab data hour
    //grab userInput
    //save them to local storag
    // var value = $(this).siblings(".schedule").val();
    // var time = $(this).parent().attr("id");

    // localStorage.setItem(time, value)



    var dataHour = $(this).attr("data-hour");
    var inputField = $("#" + dataHour).val();
    console.log(inputField);
    localStorage.setItem(dataHour,inputField);

})


function renderPlans() {
    for (var i = 0; i <= timeSlots.length; i++) {
        $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
    }
};


function compareTime(){

    var currentHour = parseInt(time)
    
    timeSlots.forEach(function(hour){ 
        
        console.log(hour)
        console.log(currentHour)
        // $("#" + hour)

        if (hour < currentHour) {
            $("#" + hour).addClass("past");
        
        } else if (hour === currentHour) {
            $("#" + hour).removeClass("past");
            $("#" + hour).addClass("present");
        } else {
            $("#" + hour).removeClass("past");
            $("#" + hour).removeClass("present");
            $("#" + hour).addClass("future");
        } 
    })


        
    }

    

renderPlans();

compareTime();

Clamshells2.attr