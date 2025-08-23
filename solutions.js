/*let lessThan = 1
do{
    console.log(`* ${lessThan}`)
    lessThan++
}while (lessThan < 20)

/*let trackSong = 10
switch(trackSong){
    case 1:
        trackSong = "Jingle Bells";
        break;

    case 2:
        trackSong = "Song of joy";
        break;

    case 3:
        trackSong = "Triumphant king";
        break;

    case 4:
        trackSong = "Angelic songs";
        break;

    case 5:
        trackSong = "All i want in xmas";
        break;

    case 6:
    case 7:
    case 8:
        trackSong = "Dance Rejoice"
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        trackSong = "Happy Times"
        break;

    default:
        trackSong = "Invalid track song"
        break; 

}
console.log(`Playing ${trackSong}`)*/


/*const { setDefaultOptions } = require("readline-sync");
readlineSync = require('readline-sync')

const airSit = 10

const a = readlineSync.question('please input ticket number: ')

if(airSit <= a) {
    console.log("Economy flight")
}else {
    console.log("You are on first class section")
}*/

let number = 1

while(number <= 100) {
    console.log(`The multiple of 2 number is ${number}`)
    number *= 2


}

let chelseaPlayers = ['Palmer', "Delap", "Neto", "Pedro", "Calciedo", "James"];

// Solved this using normal "for loop"
for (let i = 0; i < chelseaPlayers.length; i++){
    console.log(chelseaPlayers[i]);
}

// "For of loop" is used below
for (players of chelseaPlayers) {
    console.log(players)
};
