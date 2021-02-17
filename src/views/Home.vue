<template>
  <div>
    <HomeMenu />
    <div class="main-container">
      <div class="loginsuccess-container">
        <h2 class="heading">Login Success!</h2>
        <!-- <div>
          <div v-if="this.$store.state.loginUser.loginType == 'fb'">
            Facebook Access Token - {{this.$store.state.loginUser.fb.authResponse.accessToken}}
          </div>
          <div v-else-if="this.$store.state.loginUser.loginType == 'google'">
            Google Access Token - {{accessToken}}
            <p>Welcome {{userName}} !</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HomeMenu from '@/components/Menu'
import { google_auth } from '@/config/google_service.js'

export default {
  name: 'home',
  components: {
    HomeMenu
  },
  computed: {
    profileData() {
      return this.$store.state.loginUser.google
    },
    accessToken() {
      let data = this.profileData.getAuthResponse()
      return data.access_token 
    },
    userName() {
      let data = this.profileData.getBasicProfile()
      return data.getName() 
    }
  },
  mounted () {
    console.log('google_auth', google_auth)

    // var auth2;
    // var googleUser; // The current user


    // // is user sign in
    // console.log('is user signen in', gapi.auth2.getAuthInstance().isSignedIn.get())

    // gapi.load('auth2', function(){
    //     auth2 = gapi.auth2.init({
    //         client_id: '213998058564-d4arh06ckgknnj6m3m0hgkf7hq8k0sqh.apps.googleusercontent.com'
    //     });
    //     auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);

    //     auth2.isSignedIn.listen(signinChanged);
    //     auth2.currentUser.listen(userChanged); // This is what you use to listen for user changes
    // });  

    // var signinChanged = function (val) {
    //     console.log('Signin state changed to ', val);
    // };

    // var onSuccess = function(user) {
    //     console.log('Signed in as ' + user.getBasicProfile().getName());
    //     // Redirect somewhere
    // };

    // var onFailure = function(error) {
    //     console.log(error);
    // };

    // function signOut() {
    //     auth2.signOut().then(function () {
    //         console.log('User signed out.');
    //     });
    // }        

    // var userChanged = function (user) {
    //     if(user.getId()){
    //       // Do something here
    //     }
    // };
  },
}
</script>