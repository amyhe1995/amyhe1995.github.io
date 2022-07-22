// Set the date we're counting down to
const newYears = '1 Jan 2023'

// Update the count down every 1 second
function countdown() {
  const newYearsDate = new Date(newYears)
  // Get today's date and time
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60
  // Display the result in the element
  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = formatTime(hours)
  document.getElementById('mins').innerHTML = formatTime(mins)
  document.getElementById('seconds').innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)
