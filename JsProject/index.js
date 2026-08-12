// alert("hallo");
let x;
function timer(){

const input = document.getElementById("Date-input").value;

if (!input) {
    alert("Please select a date and time.");
    return;
}

const endDate = new Date(input).getTime();
const startDate = new Date().getTime();



  x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distacnePending = endDate - now;

    // calculate Days ,hrs ,min , sec
    // 1 days = (24 * 60 * 60 * 1000)

    const oneDayInMillis = ( 24*60*60*1000);
    const oneHoursInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const onesecInMillis = (1000);


    const Day = Math.floor(distacnePending / oneDayInMillis);
    const hrs = Math.floor((distacnePending % oneDayInMillis)/oneHoursInMillis);
    const Mins = Math.floor((distacnePending %oneHoursInMillis)/oneMinInMillis);
    const Sec = Math.floor((distacnePending % oneMinInMillis)/onesecInMillis);

    //Update the Timer On Bord 

    document.getElementById("days").innerHTML = Day;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("mins").innerHTML = Mins;
    document.getElementById("sec").innerHTML = Sec;
  
    // Update the Progress Bar 

    const totalDistance = endDate - startDate ;
    const progressPercentage = (distanceCovered/totalDistance)*100;

    // Set width to the progress bar 

    document.getElementById("progress-bar").style.width = progressPercentage + "%";

    if(distacnePending < 0 )
    {   
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "EXPIRED" ;
        document.getElementById("progress-bar").style.width = "100%";
         

    }
    if(progressPercentage > 75 ){
        document.getElementById("progress-bar").style.backgroundColor = "red";
    }

}, 1000);

}
function stopTimer() {
    clearInterval(x);

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("mins").textContent = "00";
    document.getElementById("sec").textContent = "00";
    

    document.getElementById("progress-bar").style.width = "0%";
}