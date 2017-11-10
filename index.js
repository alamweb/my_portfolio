function digitalClock (){
let time = new Date();

let localTime = document.getElementById("clock");

// // Souurce for method : " toLocaleTimeString ": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

localTime.innerHTML= time.toLocaleTimeString("en-US");


  }

// End of digitalClock function

let  digitalTime = setInterval(digitalClock, 1000);

onclick="window.open(this.href,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;"
