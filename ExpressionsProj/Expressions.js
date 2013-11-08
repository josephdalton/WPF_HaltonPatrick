/**
 * Created by patrickhalton on 11/7/13.
 */

//Expressions Project New york Jets winning percentage

var x;
var answer = prompt('What is the New York Jets Winning Percentage?');

if(answer==1){

    x=('Correct');
}   else x=('Incorrect')


console.log(x);





var state = 'New York';
var team = 'Jets';
var winP = 'Winning Percentage'
var teamName = state + ' ' + team + ' ' + winP;


//this displays what information is going to be stored


var winningPercent;
var wins;
var loss;
var draw;

var wins = (5);
var loss = (4);
var draw = (0);
var gamesPlayed = 9;
//to find the winning percentage you have to add wins, losses, and draws.
//after that divide by the number of games that have been played.
//make sure that if I add variables they are in ()
// to tell the computer to do the addition before subtraction.



var winningPercent = (wins + loss + draw)/gamesPlayed;

console.log(winningPercent); console.log(teamName);


//had to console.log the winningPercent and teamName because those are the variables that are being displayed












