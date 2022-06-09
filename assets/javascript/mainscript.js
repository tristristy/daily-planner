var mainClock = moment().format("HH")
console.log(mainClock);

var scheduleItems = [];

const currentDay = document.getElementById("currentDay")

var loadTextArray = function(){
    JSON.parse(localStorage.getItem("workDayArray"));
};

var saveTextArray = function(){
    localStorage.setItem("workDayArray", JSON.stringify(workDayArray));
};

$(".task-text").click(function(){
    var value = $(".task").attr("contenteditable");
    if (!value){
        $(".task").attr("contenteditable", "true");
    } else {
        $(".task").attr("contenteditable", "false");
    }
});


var textColorChanger = function(){
    if (mainClock < 9){
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").removeClass("past");
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }

    if (mainClock == 9) {
        $("#hour-9").removeClass("future");
        $("#hour-9").addClass("present");
        $("#hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 10) {
        $("#hour-9, #hour-10").removeClass("future");
        $("#hour-9").addClass("past");
        $("#hour-10").addClass("present");
        $("#hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 11) {
        $("#hour-9, #hour-10, #hour-11").removeClass("future");
        $("#hour-9, #hour-10").addClass("past");
        $("#hour-11").addClass("present");
        $("#hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 12) {
        $("#hour-9, #hour-10, #hour-11, #hour-12").removeClass("future");
        $("#hour-9, #hour-10, #hour-11").addClass("past");
        $("#hour-12").addClass("present");
        $("#hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 13) {
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13").removeClass("future");
        $("#hour-9, #hour-10, #hour-11, #hour-12").addClass("past");
        $("#hour-13").addClass("present");
        $("#hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 14) {
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14").removeClass("future");
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13").addClass("past");
        $("#hour-14").addClass("present");
        $("#hour-15, #hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 15) {
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15").removeClass("future");
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14").addClass("past");
        $("#hour-15").addClass("present");
        $("#hour-16, #hour-17").addClass("future");
    }
    if (mainClock == 16) {
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16").removeClass("future");
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15").addClass("past");
        $("#hour-16").addClass("present");
        $("#hour-17").addClass("future");
    }
    if (mainClock == 17) {
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").removeClass("future");
        $("#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16").addClass("past");
        $("#hour-17").addClass("present");
    }

    if (mainClock > 17) {
        $("hour-17").removeClass("present");
        $("#hour-17").addClass("past");
    }
    
}
setInterval(()=>{
    const now = moment().format('LLLL');
    
    textColorChanger();
    currentDay.textContent = now;
}, 1000);


// switch(mainClock) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//         $("#hour")
//         break;
//     case 9:
//         $("#hour-9").removeClass("future")
//         $("#hour-9").addClass("present");
//         break;
//     case 10:
//         break;
//     case 11:
//         break;
//     case 12:
//         break;
//     case 13:
//         break;
//     case 14:
//         break;
//     case 15:
//         break;
//     case 16:
//         break;
//     case 17:
//         break;
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         break;
// }