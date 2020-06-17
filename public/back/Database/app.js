// Mettez ici votre config

var firebaseConfig = {
    apiKey: "AIzaSyDEW9kA0lZ9KWmVNsqCGOkJw28TM6AqWTQ",
    authDomain: "the-strokes-j.firebaseapp.com",
    databaseURL: "https://the-strokes-j.firebaseio.com",
    projectId: "the-strokes-j",
    storageBucket: "the-strokes-j.appspot.com",
    messagingSenderId: "537977635064",
    appId: "1:537977635064:web:7ae688d622df62aeb8fb0d",
    measurementId: "G-31ZT06QWHH"
    // ....
  }; 

  firebase.initializeApp(config);

var getLieu = document.getElementById("lieu")
var getAdresse = document.getElementById("adresse")
var getDate = document.getElementById("Date")


var insert = document.getElementById("insert")
var update = document.getElementById("update")
var remove = document.getElementById("remove")


/* code insert */

insert.addEventListener('click' , e=> {
  var lieu = getLieu.value ; 
  var Adresse = getadresse.value ; 
  var Date = getDate.value ; 

  var dbInsert = firebase.database().ref().child('Dates_concerts').set(lieu , Adresse , Date)
  console.log(dbInsert)
})