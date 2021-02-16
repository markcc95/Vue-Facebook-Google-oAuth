<template>
  <div class="main-container">
    <form>
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <input id="email" name="email" type="text" placeholder="Email Address">
        </div>
        <div class="form-fields">
          <input id="password" name="password" type="text" placeholder="Password">
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">
            Sign In
          </button>
        </div>

        <div id="my-signin2"></div>

        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin />
      </div>
    </form>
    <div class="footer">
       <p>Don't have an account? <a href="/signup"> Create one now</a></p>
    </div>
  </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
export default {
  name: 'login',
  components: {
    SocialLogin
  },
  created() {
    setTimeout(() => {
      console.log('app name', this.$appName)
      console.log('auth2', this.$auth2)
      let isSignedIn = this.$auth2.getAuthInstance().isSignedIn.get()
      console.log('isSignedIn', isSignedIn)
      if(isSignedIn) this.$router.push('/home')
    }, 100);
  },
  mounted() {
    console.log('mounted')
    var self = this
    this.$nextTick(() => {
      function onSuccess(googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        self.$router.push('/home')
      }
      function onFailure(error) {
        console.log(error);
      }
      function renderButton() {
        gapi.signin2.render('my-signin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
        });
      }

      renderButton()
    })
  }
}
</script>
