function showTime() {
  let a = new Date();

  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let session = "AM";

  if (h >= 12) session = "PM";
  if (h > 12) h = h - 12;

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m; // adding leading zero // output 09 instead of 9
  if (s < 10) s = "0" + s;

  document.getElementById("clock").innerText =
    h + ":" + m + ":" + s + " " + session;
}

// update every 1 second
setInterval(showTime, 1000);

// run once immediately
showTime();
