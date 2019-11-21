
function getTimestamp() {
 let date = document.getElementById('date-input').value;
fetch(`https://east-timestamp.glitch.me/api/timestamp/${date}`)
  .then(res => res.json())
  .then(data => displayDate(data))
}

function displayDate(data) {
  document.getElementById('test').innerHTML = data.utc;
}

