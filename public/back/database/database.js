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

// Initialisation des gestionnaires d'événement
$('#addMessageForm').on('submit', onAddMessage);
$('#addUserForm').on('submit', onAddUser);

// ----------------------------------------
// 1) [À FAIRE] Complétez les gestionnaires d'événement onAddMessage() et onAddUser()
// ----------------------------------------

function onAddMessage (event) {
    event.preventDefault();

    const lieu = $('#lieu').val();
    const dates = $('#dates').val();

    // Votre code ici ...
    // Ajouter le pseudo et le message dans la database ...

    firebase.database().ref('/dates').push(({
        lieu,
        dates,
    }))
}


function onAddUser (event) {
    event.preventDefault();

    const nom = $('#nom').val();
    const age = $('#age').val();

    firebase.detabase().ref('/posts').push({
        nom , 
        age
    });

    // Votre code ici ...
    // Ajouter le nom et l'age dans la database ...
}

// ----------------------------------------
// 2) [À FAIRE] Écrivez le code qui permet de récupérer les messages ET les utilisateurs de la base
// ----------------------------------------

// Récupération des messages...


firebase.database().ref('/posts').on('value', function(snapshot) {
    $('#messages').empty();
    snapshot.forEach(function(item) {
        $('#messages').append('<li>'+ item.val().pseudo +' : '+ item.val().message +'</li>');
    })
});


// Récupération des utilisateurs...
