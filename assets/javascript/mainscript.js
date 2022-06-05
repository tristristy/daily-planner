
var scheduleItems = [];

const currentDay = document.getElementById("currentDay")

setInterval(()=>{
    const now = moment().format('LLLL');
    

    currentDay.textContent = now;
}, 1000);

