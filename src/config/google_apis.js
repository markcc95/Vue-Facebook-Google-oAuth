var auth2;
var googleUser; // The current user

gapi.load('auth2', function(){
    console.log('load')
    auth2 = gapi.auth2.init({
        client_id: '213998058564-d4arh06ckgknnj6m3m0hgkf7hq8k0sqh.apps.googleusercontent.com'
    });
}); 

export default auth2;

var signinChanged = function (val) {
    console.log('Signin state changed to ', val);
};

var onSuccess = function(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
    // Redirect somewhere
};

var onFailure = function(error) {
    console.log(error);
};

function signOut() {
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}        

var userChanged = function (user) {
    if(user.getId()){
        // Do something here
    }
};