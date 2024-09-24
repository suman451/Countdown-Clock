const endDate = "25 September 2024 02:43 AM"

document.getElementById('end-date').innerText = endDate;
const input = document.querySelectorAll('input');

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if (diff < 0) return; // so that timer not go in negative it will stop after set time will complete 

    input[0].value = (Math.floor(diff / 3600 / 24)); //to convert into days
    input[1].value = (Math.floor(diff /3600 % 24)); // to convert into hours
    input[2].value = (Math.floor(diff / 60) % 60); // to convert into minutes
    input[3].value = (Math.floor(diff) % 60); // to convert into minutes



}
// initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000,
)