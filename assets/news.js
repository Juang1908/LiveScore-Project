const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5741313f73mshde045df597bb1bap194d8fjsnc976ce84250e",
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};
var allMyData;
var link01;
var link02;
var link03;
var link04;
var link05;
var link06;
var link07;
var link08;
var link09;
var link010;
var link011;
var link012;

fetch("https://livescore6.p.rapidapi.com/news/v2/list/", options)
  .then((response) => response.json())
  .then((response) => {
    allMyData = response.topStories;
    link01 = allMyData[0].url;
    link02 = allMyData[1].url;
    link03 = allMyData[2].url;
    link04 = allMyData[3].url;
    link05 = allMyData[4].url;
    link06 = allMyData[5].url;
    link07 = allMyData[6].url;
    link08 = allMyData[7].url;
    link09 = allMyData[8].url;
    link010 = allMyData[9].url;
    link011 = allMyData[10].url;
    link012 = allMyData[11].url;
    console.log(allMyData);
    for (var i = 0; i < allMyData.length; i++) {
      box1El.textContent = allMyData[0].title;
      box2El.textContent = allMyData[1].title;
      box3El.textContent = allMyData[2].title;
      box4El.textContent = allMyData[3].title;
      box5El.textContent = allMyData[4].title;
      box6El.textContent = allMyData[5].title;
      box7El.textContent = allMyData[6].title;
      box8El.textContent = allMyData[7].title;
      box9El.textContent = allMyData[8].title;
      box10El.textContent = allMyData[9].title;
      box11El.textContent = allMyData[10].title;
      box12El.textContent = allMyData[11].title;
      var link010 = "https://livescore.com" + link01;
      var link020 = "https://livescore.com" + link02;
      var link030 = "https://livescore.com" + link03;
      var link040 = "https://livescore.com" + link04;
      var link050 = "https://livescore.com" + link05;
      var link060 = "https://livescore.com" + link06;
      var link070 = "https://livescore.com" + link07;
      var link080 = "https://livescore.com" + link08;
      var link090 = "https://livescore.com" + link09;
      var link0100 = "https://livescore.com" + link010;
      var link0110 = "https://livescore.com" + link011;
      var link0120 = "https://livescore.com" + link012;
      link1El.setAttribute("href", link010);
      link2El.setAttribute("href", link020);
      link3El.setAttribute("href", link030);
      link4El.setAttribute("href", link040);
      link5El.setAttribute("href", link050);
      link6El.setAttribute("href", link060);
      link7El.setAttribute("href", link070);
      link8El.setAttribute("href", link080);
      link9El.setAttribute("href", link090);
      link10El.setAttribute("href", link0100);
      link11El.setAttribute("href", link0110);
      link12El.setAttribute("href", link0120);
    }
  })
  //.then(response => console.log(response.topStories))
  .catch((err) => console.error(err));

//link1El.textContent = "url = https://www.livescore.com"

// console.log(allMyData);
const box1El = document.getElementById("box1");
const box2El = document.getElementById("box2");
const box3El = document.getElementById("box3");
const box4El = document.getElementById("box4");
const box5El = document.getElementById("box5");
const box6El = document.getElementById("box6");
const box7El = document.getElementById("box7");
const box8El = document.getElementById("box8");
const box9El = document.getElementById("box9");
const box10El = document.getElementById("box10");
const box11El = document.getElementById("box11");
const box12El = document.getElementById("box12");
const link1El = document.getElementById("link1");
const link2El = document.getElementById("link2");
const link3El = document.getElementById("link3");
const link4El = document.getElementById("link4");
const link5El = document.getElementById("link5");
const link6El = document.getElementById("link6");
const link7El = document.getElementById("link7");
const link8El = document.getElementById("link8");
const link9El = document.getElementById("link9");
const link10El = document.getElementById("link10");
const link11El = document.getElementById("link11");
const link12El = document.getElementById("link12");
// const h2El = document.getElementById ('h2');
// const pEl = document.getElementById ('p');
//console.log(artTitle);
// console.log(articlePre);
