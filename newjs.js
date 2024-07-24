/* JS DOM */
let hourVar = document.getElementById("hours");
let minuteVar = document.getElementById("minutes");
let secondVar = document.getElementById("seconds");

let dayVar = document.getElementById("date");

/* MAIN */
setInterval(()=>{
    let getTime = new Date();
    
    dayVar.innerHTML = `${getTime.getDate()}/${("0" + getTime.getMonth()).slice(-2)}/${getTime.getFullYear()}`;

    hourVar.innerHTML = `${("0" + getTime.getHours()).slice(-2)}`;
    minuteVar.innerHTML = `${("0" + getTime.getMinutes()).slice(-2)}`;
    secondVar.innerHTML = `${("0" + getTime.getSeconds()).slice(-2)}`;
}, 1000);