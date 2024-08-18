let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm')

function clock() {
    let now = new Date();
    let hoursNumber = (now.getHours()) > 12 ? (now.getHours()) - 12 : (now.getHours());
    let minutesNumber = now.getMinutes();
    let secondsNumber = now.getSeconds();

    hours.innerHTML = hoursNumber < 10 ? '0' + hoursNumber : hoursNumber;
    minutes.innerHTML = minutesNumber < 10 ? '0' + minutesNumber : minutesNumber;
    seconds.innerHTML = secondsNumber < 10 ? '0' + secondsNumber : secondsNumber;
    ampm.innerHTML = (now.getHours()) > 12 ? 'PM' : 'AM';
}
setInterval(clock, 1000)