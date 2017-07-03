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
var middleEarth;
var theShire;
var hobbitSquad;
var Gandalf;
var Frodo;
var theOneRing;

// Part 1
var middleEarth = document.createElement('section');
middleEarth.setAttribute('id', 'middle-earth');

function makeMiddleEarth() {
  // create a section tag with an id of middleEarth
  //var middleEarth = document.createElement('section');  
  // inside, add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
    var territories = document.createElement('article');
    territories.setAttribute('data-id', i);
    middleEarth.appendChild(territories);
  // inside each article tag include an h1 with the name of the land
    var repYoCity = document.createElement('h1');
    repYoCity.innerHTML = lands[i];
    territories.appendChild(repYoCity);
  }
    // append middle-earth to your document body
  document.body.appendChild(middleEarth);
}
makeMiddleEarth();

//var middleEarth = document.getElementById('middleEarth');

// Part 2
var theShire = document.querySelector('article');
theShire.setAttribute('id', 'theShire');
var hobbitSquad = document.createElement('ul');
hobbitSquad.setAttribute('id', 'hobbitSquad');

function makeHobbits() {
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
for(var i = 0; i < hobbits.length; i++){
  var imaHobbit = document.createElement('li');
  imaHobbit.setAttribute('data-id', i);
// give each hobbit a class of hobbit
  imaHobbit.classList.add('hobbit');
  imaHobbit.innerHTML = hobbits[i];
  hobbitSquad.appendChild(imaHobbit);
  }
  theShire.appendChild(hobbitSquad);
}
makeHobbits();

//var theShire = document.getElementById(theShire);
//var hobbitSquad = document.getElementById(hobbitSquad);

// Part 3
// create a div with an id of 'the-ring'
var theOneRing = document.createElement('div');
theOneRing.setAttribute('id', 'the-ring');
var Frodo = document.querySelector('li.hobbit');

function keepItSecretKeepItSafe() {
  // give the div a class of 'magic-imbued-jewelry'
  theOneRing.classList.add('magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theOneRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  Frodo.appendChild(theOneRing);
}
keepItSecretKeepItSafe();

// Part 4
var crew = document.createElement('ul');
var Rivendell = middleEarth.firstChild.nextSibling;

function makeBuddies() {
  // create an aside tag
  var asideTag = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  asideTag.appendChild(crew);
  // insert your aside as a child element of rivendell
  Rivendell.appendChild(asideTag);
  for(var i = 0; i < buddies.length; i++){
    var bro = document.createElement('li');
    bro.setAttribute('data-id', i);
    bro.innerHTML = buddies[i];
    crew.appendChild(bro);
  }
}
makeBuddies();

// Part 5
var whoseInMyCrew = crew.getElementsByTagName('li');
var Aragorn = document.createElement('li');
Aragorn.innerHTML = "Aragorn";

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  for(var i = 0; i < whoseInMyCrew.length; i++){
      if(whoseInMyCrew[i].innerHTML === 'Strider') {
        crew.replaceChild(Aragorn, whoseInMyCrew[i]); 
      }
    }
  }
beautifulStranger();

// Part 6
function leaveTheShire() {  
  theShire.removeChild(hobbitSquad); //gather the hobbits
  //remove from theShire
  //move them to Rivendell
  Rivendell.appendChild(hobbitSquad);
  }
leaveTheShire();

// Part 7
var theFellowship = document.createElement('div');
theFellowship.setAttribute('id', 'the-fellowship');
var demHobbits  = hobbitSquad.getElementsByTagName('li');
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  Rivendell.appendChild(theFellowship);

  //add each hobbit
  for(var j = 0; j < demHobbits.length; j++){
    var cloneDemHobbits = demHobbits[j].cloneNode(true);
    theFellowship.appendChild(cloneDemHobbits);
    alert(demHobbits[j].innerText + " has joined the fellowship");
  }
  // add each buddy 
  for(var i = 0; i < whoseInMyCrew.length; i++){
    var cloneCrew = whoseInMyCrew[i].cloneNode(true);
    theFellowship.appendChild(cloneCrew);
    alert(whoseInMyCrew[i].innerText + " has joined the fellowship");
  }
  Rivendell.removeChild(hobbitSquad);
  Rivendell.firstChild.nextSibling.removeChild(crew);
}
forgeTheFellowShip();
var theFellowshipOfTheRing = theFellowship.getElementsByTagName('li');

// Part 8
function theBalrog() {
for(var i = 0; i < theFellowshipOfTheRing.length; i++){
    theFellowshipOfTheRing[i].setAttribute('data-id', i);
// change the 'Gandalf' textNode to 'Gandalf the White'        
    if(theFellowshipOfTheRing[i].innerHTML === 'Gandalf the Grey'){
      var Gandalf = theFellowshipOfTheRing[i];
      Gandalf.innerHTML = 'Gandalf the White';
// apply style to the element
// make the background 'white', add a grey border
      Gandalf.style.background = 'white';
      Gandalf.style.border = '4px solid grey';
    }
  }
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('the horn of gondor has been blown.');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  theFellowshipOfTheRing[8].setAttribute('style', 'text-decoration: line-through;');
  // Remove Boromir from the Fellowship
  theFellowship.removeChild(theFellowshipOfTheRing[8]);
}
hornOfGondor();


// Part 10
var Mordor = middleEarth.lastChild;
var mountDoom = document.createElement('div');
mountDoom.setAttribute('id', 'mount-doom');
function itsDangerousToGoAlone(){
  // add a div with an id of 'mount-doom' to Mordor
  // take Frodo and Sam out of the fellowship and move them to Mordor 
  var Frodo = theFellowshipOfTheRing[0];
  var Samwise = theFellowshipOfTheRing[1];
  theFellowship.removeChild(Frodo);
  theFellowship.removeChild(Samwise);
  Mordor.appendChild(Frodo);
  Mordor.appendChild(Samwise);
  Mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// Part 11
var gollum = document.createElement('div');
gollum.setAttribute('id', 'gollum');
function weWantsIt() {
  var Frodo = Mordor.querySelector('li'); 
  var thePrecious = Mordor.querySelector('div#the-ring'); 
  // Create a div with an id of 'gollum' and add it to Mordor
  Mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  Frodo.removeChild(thePrecious);
  gollum.appendChild(thePrecious);
  // Move Gollum into Mount Doom
  Mordor.removeChild(gollum);
  mountDoom.appendChild(gollum);
}
weWantsIt();

// Part 12
var crispyHobbits = Mordor.getElementsByTagName('li');
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum);
  function returnOfTheEagles(){
    Mordor.removeChild(crispyHobbits[0]);
  }
  returnOfTheEagles();
  returnOfTheEagles();
  // remove all the baddies from the document
  Rivendell.removeChild(theFellowship);
  console.log(Rivendell);
  // Move all the hobbits back to the shire
  theShire.appendChild(hobbitSquad);
  Frodo.removeChild(theOneRing);
}
thereAndBackAgain();