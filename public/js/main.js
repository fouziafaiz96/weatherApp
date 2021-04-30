const btn = document.getElementById("search-btn");
const errorMsg = document.getElementsByClassName("error-msg");
const resultMsg = document.getElementById("result-msg");
const resultStatus = document.getElementById("result-status");

const getInfo = async (e) => {
  e.preventDefault();
  const city = document.getElementById("search-input").value;

  let reqUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
  fetch(reqUrl);
  if (city == "") {
    errorMsg.innerText = "Enter city name";
  } else {
    try {
      const res = await fetch(reqUrl);
      const jsonData = await res.json();
      resultMsg.innerText = `Temperature is ${jsonData.main.temp}`;
      if (jsonData.weather[0].main == "Clouds") {
        resultStatus.innerHTML = '<i class="fas fa-cloud"></i>';
      } else if (jsonData.weather[0].main == "Clear") {
        resultStatus.innerText = `<i class="fas fa-sun"></i>`;
      }
      console.log(jsonData);
    } catch {
      errorMsg.innerText = "Enter valid city name";
    }
  }
};
btn.addEventListener("click", getInfo);
