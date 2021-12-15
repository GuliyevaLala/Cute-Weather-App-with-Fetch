
var button= document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var main = document.querySelector('#name');
var temp = document.querySelector('.temperature');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.hum');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=2fd9a5bc5c5eb7b1c3a9182fdc30e90d')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humValue = data['main']['humidity'];
  temp.innerHTML = (Math.floor(tempValue - 273.15)) + '°C';
	desc.innerHTML = descValue;
	  main.innerHTML = nameValue;
      humidity.innerHTML = humValue + '%';

})

.catch(err => alert("Enter valid city name!"));
})
