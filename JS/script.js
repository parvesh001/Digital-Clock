let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let ampm = document.getElementById("Am");

/*//with setinterval
let myInterval = setInterval(digitalClock, 1000);

function digitalClock() {
  let now = new Date();
  let now = new Date();

    function zero(value){
      if(value < 10){
          return value = `0${value}`
      }else {
          return value;
      }
    };

    hr.innerText = zero(now.getHours());
    min.innerText = zero(now.getMinutes());
    sec.innerText = zero(now.getSeconds());

  if(+hr.innerText > 12){
    ampm.innerText = "pm"
  }else{
    ampm.innerText = "am"
  }
}*/

//with setTimeout

function digitalClock(){
  // => storing new Date object into variable
    let now = new Date();

    // => returning value with zero in case of lower than 10.
    function zero(value){
      if(value < 10){
          return value = `0${value}`
      }else {
          return value;
      }
    };

    // => setting inner texts.
    hr.innerText = zero(now.getHours());
    min.innerText = zero(now.getMinutes());
    sec.innerText = zero(now.getSeconds());

    // => dynamic AM and PM setting.
    if(+hr.innerText > 12){
      ampm.innerText = "pm"
    }else{
      ampm.innerText = "am"
    }

    // => ensuring function is called continously after 1s.
    setTimeout(digitalClock,1000);
}
digitalClock();
