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

 firebase.initializeApp(firebaseConfig) ; 



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     document.getElementById("user_div").style.display = "block"
     document.getElementById("login_div").style.display = "none"


     var user = firebase.auth().currentUser;
     if(user != null) {
         var email_id = user.email;
         document.getElementById("userpara").innerHTML ="welcome user" + email
     }
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none"
      document.getElementById("login_div").style.display = "block"
    }
  });


function login() {
    
    const userEmail = document.getElementById("emailField").Value()
    const userPass = document.getElementById("passwordField").value()

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        
        // ...
      });

 
}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}



 // FirebaseUI config.
 var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
