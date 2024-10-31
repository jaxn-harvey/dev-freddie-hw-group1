let gamesArray = [
  
  //Group 1 ----------------
  
{gameName: "Escape the Garden", gameURL: "https://baileestrait.github.io/dev-david-lab/", gameAuthor: "Bailee Strait", gameRepo: "https://github.com/baileestrait/dev-david-lab"},
  
{gameName: "Vroom", gameURL: "https://jaxn-harvey.github.io/dev-david/", gameAuthor: "Jackson Harvey", gameRepo: "https://github.com/jaxn-harvey/dev-david"},
  
 {gameName: "Catch the Butterfly", gameURL: "https://iarcher444.github.io/dev-david-lab/", gameAuthor: "Isabella Archer", gameRepo: "https://github.com/iarcher444/dev-david-lab"},
  
  {gameName: "The Emoji Game", gameURL: "https://mtrejo03.github.io/dev-david-hw/", gameAuthor: "Milly Trejo", gameRepo: "https://github.com/mtrejo03/dev-david-hw"},
  
  //Group 2 ----------------
  
  {gameName: "Futbol Mania", gameURL: "https://jm-2017.github.io/urban-carnival-nuExample/", gameAuthor: "Janet Martinez", gameRepo: "https://github.com/jm-2017/urban-carnival-nuExample"},
  
  {gameName: "Slides", gameURL: "https://basstbone.github.io/dev-david-hw/", gameAuthor: "Sean Oliver", gameRepo: "https://github.com/basstbone/dev-david-hw"},
  
  //Group 3 -----------------
  
  {gameName: "colorName", gameURL: "https://mlsmason6.github.io/improved-computing-machine-colorName/", gameAuthor: "Mason Schrader", gameRepo: "https://mlsmason6.github.io/improved-computing-machine-colorName/"},
  
  {gameName: "Escape Room", gameURL: "https://joshuabrad03.github.io/scaling-octo-david/", gameAuthor: "Joshua Bradley", gameRepo: "https://joshuabrad03.github.io/scaling-octo-david/"},
  
  {gameName: "Meh Game", gameURL: "https://mrspartan38.github.io/dev-david-hw/", gameAuthor: "Evan Sager", gameRepo: "https://github.com/mrspartan38/dev-david-hw"},
  
   //Group 4 -----------------
  
  {gameName: "Circle Game", gameURL: "https://jomlli709.github.io/octo-goggles-david-hw/", gameAuthor: "Jodi Gambrell", gameRepo: "https://github.com/jomlli709/octo-goggles-david-hw/tree/main"},
  
  {gameName: "Shooting Star", gameURL: "https://nbrown2002.github.io/Dev-David/", gameAuthor: "Noah Brown", gameRepo: "https://github.com/Nbrown2002/Dev-David"},
  
  {gameName: "UFO Game", gameURL: "https://whitb43.github.io/UFO-Escape/", gameAuthor: "Whit Brewer", gameRepo: "#"},
  
  {gameName: "Battery Charger Game", gameURL: "https://ssasaki1.github.io/dev-david-lab/", gameAuthor: "Shun Sasaki", gameRepo: "#"},
  
  //Group 5 -----------------
  
  //Group 6 -----------------
  
  {gameName: "Rock-Paper-Scissors", gameURL: "https://kethanpilla.github.io/dev-freddie-hw/", gameAuthor: "Kethan Pilla", gameRepo: "https://github.com/KethanPilla/dev-freddie-hw"},
  
  {gameName: "Wow Game", gameURL: "https://pmalhotra21.github.io/wow-game/", gameAuthor: "Paridhi Malhotra", gameRepo: "https://pmalhotra21.github.io/wow-game/"},
  
  //Group 7 -----------------
  
  {gameName: "Square Game", gameURL: "https://allisonlacy.github.io/alligamerepo/", gameAuthor: "Allison Lacy", gameRepo: "#"},
  
  //Group 8 -----------------
  
  {gameName: "Spongebob vs Doodlebob", gameURL: "https://a-nunley.github.io/dev-david/", gameAuthor: "Alex Nunley", gameRepo: "https://github.com/a-nunley/dev-david"},
  
  {gameName: "David V Goliath", gameURL: "(https://germannnick.github.io/Dev-David-Goliath/)", gameAuthor: "Nick Germann", gameRepo: "https://github.com/germannnick/Dev-David-Goliath"},
  
  {gameName: "Find the Surprise!", gameURL: "https://tuesdayannb.github.io/miniature-enigma-david/", gameAuthor: "Tuesday Brown", gameRepo: "https://github.com/TuesdayAnnB/miniature-enigma-david"}
   
];

for (j = 0; j < gamesArray.length; j++){
  
    $('body').append(`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${gamesArray[j].gameName}</h5>
    <p class="card-text">Creator: ${gamesArray[j].gameAuthor}</p>
    <a href="${gamesArray[j].gameURL}" target="_blank" class="btn btn-primary"><i class="bi bi-controller"></i></a>
    <a href="${gamesArray[j].gameRepo}" target="_blank" class="btn btn-primary"><i class="bi bi-github"></i></a>
  </div>
</div>`)
};