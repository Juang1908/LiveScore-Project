const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ab2c0792amshb512595321617c6p1192acjsne463b00c17c1',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

var topTeams


fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-league?Category=soccer&Ccd=world-cup&Scd=group-b&Timezone=-7', options)
	.then(response => response.json())
	.then(response => {
		topTeams = response.Stages[0].LeagueTable.L[0].Tables[0]
		console.log(topTeams)
		for (var i = 0; i < topTeams.length; i++) {
			current = topTeams.team[i]
			console.log(`Team Name: ${current.Tnm}`)
			console.log(`Rank: ${current.rnk}`)
		}
	})
	.catch(err => console.error(err));


