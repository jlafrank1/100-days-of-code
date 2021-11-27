// math for reference
const msec = 1000;
const mmin = msec * 60;
const mhour = mmin * 60;
const mday = mhour * 24;

// fill in countdown spans
let timer = setInterval(function () {
  // today variables
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  // fill in year
  document.getElementById("year").innerText = year + 1;

  // new year's day variable
  const nyd = new Date(year + 1, 0, 1); // month is index zero

  // math to calculate countdown
  const diff = nyd - today;
  // countdown elements
  const cday = Math.floor(diff / mday);
  const chour = Math.floor((diff % mday) / mhour);
  const cminute = Math.floor((diff % mhour) / mmin);
  const csecond = Math.floor((diff % mmin) / msec);

  document.getElementById("day").innerText = cday;
  document.getElementById("hour").innerText = chour;
  document.getElementById("min").innerText = cminute;
  document.getElementById("sec").innerText = csecond;
}, 1000);
