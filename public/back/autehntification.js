// Initialisation de l'application
  // Your web app's Firebase configuration
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// --------------------------------------------
// Initialisation des gestionnaires d'événement
// --------------------------------------------

/*$('#loginButtonGithub').on('click', githubLogin);*/
$('#loginButtonGoogle').on('click', googleLogin);
$('#loginForm').on('submit', emailPasswordLogin);

// ----------------------------------------
// Définition des gestionnaires d'événement
// ----------------------------------------

function onLoginSuccess(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    
    console.log('Succès !', user);

    var nom = user.displayName;
    var photo = user.photoURL;

    $('#results').html(`
        <h1>Bienvenue ${nom}</h1>
        <img src="${photo}" alt="" />
    `);
    // ...
}

function onLoginFail (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('Erreur !', errorCode, errorMessage);
}

function githubLogin() {
    // Votre code ici ...
    // Créez un provider pour Github
    var provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).then(onLoginSuccess).catch(onLoginFail);
}

function googleLogin() {
    // Votre code ici ...
    // Créez un provider pour google
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(onLoginSuccess).catch(onLoginFail);
}






/*gerer les utilisateur*/


const email ="melissabenmeziane01@gmail.com" ;
const password ="1234"

firebase.auth().createUserWithEmailAndPassword(email , password)



/* fin de gerer les utilisateur*/



function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#emailField').val();
    const password = $('#passwordField').val();

    // Votre code ici ...
    // Utilisez les variables 'email' et 'password' pour les transmettre à Firebase via le provider "Email/Password"
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
        console.log('Succès de connexion', result);

        $('#results').html(`
            <h1>Bienvenue à vous ${result.user.email}</h1>
        `);
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log('Erreur de connexion', errorCode, errorMessage);
    });
}