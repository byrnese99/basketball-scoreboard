let homeScoreText = document.getElementById('home-score-text');
let awayScoreText = document.getElementById('away-score-text');
let homeScore = 0;
let awayScore = 0;
homeScoreText.textContent = homeScore;
awayScoreText.textContent = homeScore;

function addOneHome(){
    homeScore += 1;
    homeScoreText.textContent = homeScore;
}

function addTwoHome(){
    homeScore += 2;
    homeScoreText.textContent = homeScore;
}

function addThreeHome(){
    homeScore += 3;
    homeScoreText.textContent = homeScore;
}

function addOneAway(){
    awayScore += 1;
    awayScoreText.textContent = awayScore;
}

function addTwoAway(){
    awayScore += 2;
    awayScoreText.textContent = awayScore;
}

function addThreeAway(){
    awayScore += 3;
    awayScoreText.textContent = awayScore;
}