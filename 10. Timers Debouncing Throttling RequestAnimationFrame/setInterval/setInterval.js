function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById("timer");
  h1.innerText = secondsRemaining;
  secondsRemaining -= 1;
  const intervalId = setInterval(function () {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;

    if (secondsRemaining < 0) {
      clearInterval(intervalId);
      h1.innerText = "Time is up!!!";
    }
  }, 1000);
}

startCountdown(20);
