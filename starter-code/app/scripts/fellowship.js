console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var whereAmI = document.getElementById('middle-earth');

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middle_earth = document.createElement("section");
  middle_earth.setAttribute("id", "middle-earth");
  
  // inside, add each land as an article tag
  for(var i = 0; i < lands.length; i++){
    var land_article = document.createElement("article");
    land_article.setAttribute('data-id', i);

  // inside each article tag include an h1 with the name of the land
    var land_header = document.createElement("h1");
    land_header.innerHTML = lands[i];
    land_article.appendChild(land_header);
    middle_earth.appendChild(land_article);
  // append middle-earth to your document body
  }
  body.append(middle_earth);
}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var theresTheShire = document.querySelector("article");
  theresTheShire.setAttribute('id', 'theShire');
  var demHobbits = document.createElement('ul');
  demHobbits.setAttribute('id', 'demHobbits');
    for(var i = 0; i < hobbits.length; i++){
      var whodaHobbit = document.createElement('li');
      whodaHobbit.setAttribute('data-id', i);
  // give each hobbit a class of hobbit
      whodaHobbit.className = "hobbit";
      whodaHobbit.innerHTML = hobbits[i];
      demHobbits.appendChild(whodaHobbit);
    }
    theresTheShire.appendChild(demHobbits);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringDIV = document.createElement('div');
  ringDIV.setAttribute('id', 'the-ring'); 
  // give the div a class of 'magic-imbued-jewelry'
  ringDIV.className = 'magic-imbued-jewelry';
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringDIV.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  var Frodo = document.querySelector('li');
  Frodo.appendChild(ringDIV);
}
keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var theFellowship = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var myBros = document.createElement('ul');
  myBros.setAttribute('id', 'myBros');
  for (var i = 0; i < buddies.length; i++){
    var myBud = document.createElement('li');
    myBud.setAttribute('data-id', i);
    myBud.innerHTML = buddies[i];
    myBros.appendChild(myBud);
  }
  theFellowship.appendChild(myBros);
  // insert your aside as a child element of rivendell
  var whereAmI = document.querySelector('#middle-earth');
  var showMeRivendell = whereAmI.firstChild.nextSibling;
  showMeRivendell.setAttribute('id', 'showMeRivendell');
  showMeRivendell.appendChild(theFellowship);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var futureKing = document.querySelector('aside ul').lastChild.previousSibling;
  futureKing.innerHTML = 'Aragorn';
  }
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits
  var theShire = document.getElementById('theShire');
  var squad = document.getElementById('demHobbits');
  //remove from theShire
  var hitTheRoad = theShire.removeChild(squad);
  //move them to Rivendell
  var journeyToRivendell = document.getElementById('showMeRivendell').firstChild.nextSibling;
  journeyToRivendell.appendChild(squad);
  }
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
