
function updateCurrentTime() {
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  const currentUTCTimeInMillisecondsElement = document.querySelector('[data-testid="currentUTCTimeInMilliseconds"]');
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const currentDay = daysOfWeek[new Date().getUTCDay()];
  const currentTime = new Date().toUTCString();
  const currentTimeInMilliseconds = new Date().getTime();

  currentDayElement.textContent = currentDay;
  currentUTCTimeElement.textContent = currentTime;
  currentUTCTimeInMillisecondsElement.textContent = currentTimeInMilliseconds + ' milliseconds';
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Call the function to display initial data
updateCurrentTime();

