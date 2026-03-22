let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");



convertBtnEl.onclick = function() {
    let inputhours = hoursInputEl.value;
    let inputminutes = minutesInputEl.value;

    let parseinthours = parseInt(inputhours);
    let parseintmintes = parseInt(inputminutes);

    timeInSeconds = parseinthours * 3600 + parseintmintes * 60;
    timeInSecondsEl.textContent = timeInSeconds;

    if (inputhours === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        timeInSecondsEl.textContent = ""
    } else if (inputminutes === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        timeInSecondsEl.textContent = ""
    }
}