
(function () {
    var config = {
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



    /*recuperer les donner - get elem*/

    const txtEmail = document.getElementById("textEmail");
    const txtPassword = document.getElementById('textPassword');
    const btnLogin = document.getElementById('btnLogin');
    

    /* add login event */

    btnLogin.addEventListener('click', e => {

        /*get email and pass */
        e.preventDefault();
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // sign in */
      

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then((res) => {
            console.log(res);

            firebase.auth().onAuthStateChanged(user => {
              if(user) {
                window.location = 'admin.html' ; //After successful login, user will be redirected to home.html
              }
              else {
                window.location = 'connexion.html'
              }
         });
            
        });


        promise.catch(e => {
            console.log(e.message)
            
            var errorCode = e.code;
            var errorMessage = e.message;
        

          if (errorCode != 'user') {
            alert(' email ou mot de passe incorrect');
           /* alert($('textPassword').attr('placeholder', 'mot de passe incorrect'));*/
          } else {
            alert(errorMessage);
          }
         
            
        });

     
    });


  
}()); 








