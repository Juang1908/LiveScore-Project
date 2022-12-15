const homeTEl = document.getElementById("team1");
const h1ImgEl = document.getElementById("img1");
const visitTEl = document.getElementById("team2");
const scoreEl = document.getElementById("score");
const highlightsEl = document.getElementById("highlights");
const scoreHEl = document.getElementById("scoreH");
const scoreAEl = document.getElementById("scoreA");
const logoHEl = document.getElementsByClassName("logoH");
const logoAE1 = document.getElementsByClassName("logoA");
const prevEl = document.getElementById("previous");
var subsArray = []
var now = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $("#currentDay").text(now)
console.log(now)


  

function getData(){
    fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=20221210&Timezone=-7',{
        method: 'GET',
        headers: { 'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'}
    })
    .then(response => response.json().then(data => {
        var teamsData =data["Stages"][0]["Events"][1];

        var teamInfo1 = teamsData["T1"][0]["Nm"];
      
        var teamInfo2 = teamsData["T2"][0]["Nm"];
        console.log(response)
        console.log(teamsData);
        
        console.log(teamInfo1);
        console.log(teamInfo2);

        homeTEl.textContent = teamInfo1;
        
        visitTEl.textContent = teamInfo2;


        for(var i = 0; i < teamsData; i++){
        // homeTEl.textContent = teamInfo1;
        // visitTEl.textContent = teamInfo2;
        }
    }))
    .catch(err => console.error(err));



}

// call function
getData();

function getAllData() {
  fetch('https://free-football-soccer-videos.p.rapidapi.com/',{
method: 'GET',
headers: {
  'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
  'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
}
})
// update data[#] on teamsHigh
.then(response => response.json().then(data => {
  var teamsHigh1 =data[49]["videos"][0]["embed"];
  var previousEl =data[50]["videos"][0]["embed"];
  var play = data;
  console.log(play);
  console.log(teamsHigh1);
  console.log(previousEl);
 

  highlightsEl.innerHTML = teamsHigh1;
  prevEl.innerHTML = previousEl;

}))

.catch(err => console.error(err));

}
getAllData();

function getscoreData () {
  fetch('https://football98.p.rapidapi.com/fifaworldcup/results',{
method: 'GET',
headers: {
  'X-RapidAPI-Key': 'ec19531030msh549c1ba3d1e32c2p1c9159jsnab8641a11590',
  'X-RapidAPI-Host': 'football98.p.rapidapi.com'}
})
  .then(response => response.json().then(data =>{
          var scoreDay = data[0][" Quarter-finals "
      ][0];
      var homeT1 =scoreDay["homeTeamScore"]
      var awayT1 =scoreDay["awayTeamScore"]
      var homeLogo =scoreDay["homeLogo"]
      var awayLogo =scoreDay["awayLogo"]
      console.log(logoAE1);
      console.log(logoHEl);
      console.log(scoreDay);
      scoreHEl.textContent ="England: " + homeT1;
      scoreAEl.textContent = "France: " + awayT1;
      logoHEl.innerHTML = homeLogo;
      logoAE1.innerHTML = awayLogo;
  }))
  .catch(err => console.error(err));
}
getscoreData ();
