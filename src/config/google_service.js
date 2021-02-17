var google_auth, google_user
gapi.load('auth2', async function(){
  google_auth = await gapi.auth2.init({
      client_id: '213998058564-d4arh06ckgknnj6m3m0hgkf7hq8k0sqh.apps.googleusercontent.com',
      access_type: 'offline'
  })

  // Check Is User Signed In
  let isGoogleSignIn = google_auth.isSignedIn.get()
  if(isGoogleSignIn) {
    google_user = google_auth.currentUser.get()
    
    localStorage.setItem('is_user_signed_in', isGoogleSignIn)
    localStorage.setItem('signed_in_user', JSON.stringify(google_user.getBasicProfile()))

    console.log('is signed in', isGoogleSignIn)
    console.log('signed in user', google_user.getBasicProfile())

    // force to reload access_token, google_user.reloadAuthResponse()
  }

  google_auth.isSignedIn.listen(signinChanged);
  google_auth.currentUser.listen(userChanged);

  // Signed In state change
  var signinChanged = function (val) {
    localStorage.setItem('user_signed_in', val)
    console.log('Signin state changed to ', val);
  };

  // User change state change
  var userChanged = function (user) {
    if(user.getId()){
      // Do something here
    }
  };
});

export default google_auth