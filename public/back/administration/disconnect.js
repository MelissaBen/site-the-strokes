/**
 * Disconnect and direction at login.html
 */

$(document).ready(function () {

    $('#btnSignOut').on('click', function () {

        firebase.auth().signOut().then(function () {
            document.location.href = '../index.html';
            console.log("OK")

        }).catch(function (error) {
            // An error happened.
            
        });

    })

})