// Elements for HTMl

//titles
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");

//Getting teams
const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");

//getting descriptions
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");

let options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d76ba585dcmsh140a4091c8d0b0ep10ffa4jsn6690ba824e8d",
    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
  },
};
//data variables
var Data1;
var Data2;
var Data3;
var Data4;
var scoreData1;
var scoreData2;
var scoreData3;
var scoreData4;
var changingVar = 0;


//window.location.refresh
fetch(
  "https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=soccer&Date=" + "20221213" + "&Timezone=-6",
  options
)
  .then((response) => response.json())
  .then((response) => {
    Data1 = response.Stages[0].Events[0].T1[0];
    Data2 = response.Stages[0].Events[0].T2[0];
    scoreData1 = response.Stages[0].Events[0];
    scoreData2 = response.Stages[0].Events[0];


    Data3 = response.Stages[changingVar].Events[1].T1[0];
    Data4 = response.Stages[changingVar].Events[1].T2[0];
    scoreData3 = response.Stages[changingVar].Events[1];
    scoreData4 = response.Stages[changingVar].Events[1];

    console.log(response);
    console.log(Data1);
    console.log(Data2);
    console.log(Data3);
    console.log(Data4);
	
	//HTML modifiers
    title1.textContent = Data1.Nm;
    var callstring = Data1.Img;
    $("#team1").attr("src", "https://lsm-static-prod.livescore.com/medium/" + callstring);
    score1.textContent = scoreData1.Tr1;

    title2.textContent = Data2.Nm;
	  var callstring2 = Data2.Img;
    $("#team2").attr("src", "https://lsm-static-prod.livescore.com/medium/" + callstring2);
    score2.textContent = scoreData2.Tr2;

    title3.textContent = Data3.Nm;
	  var callstring3 = Data3.Img;
    $("#team3").attr("src", "https://lsm-static-prod.livescore.com/medium/" + callstring3);
    score3.textContent = scoreData3.Tr1;

    title4.textContent = Data4.Nm;
	  var callstring4 = Data4.Img;
    $("#team4").attr("src", "https://lsm-static-prod.livescore.com/medium/" + callstring4);
    score4.textContent = scoreData4.Tr2;

  })
  .catch((err) => console.error(err));

//Date code
$( function() {
  $( "#datepicker" ).datepicker();
  });

//sets date variables for today
var now = new Date(); 
var day = ("0" + now. getDate())
var dateObject = now;
console.log(day)
console.log(now)

$("#datepicker").datepicker({
  format: "yy-mm-dd"
  ,onSelect: function() { 
    var dateObject = $(this).datepicker('getDate'); 
    console.log(dateObject);
  }
});
