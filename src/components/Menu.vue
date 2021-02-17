<template>
    <div class="tab">
        <!-- <a href="#" v-if="this.$store.state.loginUser" @click.prevent="logout" class="tablinks">Logout</a> -->
        <a @click.prevent="g_logout" class="tablinks">Logout</a>
        <router-link to="/login" class="tablinks">Sign In</router-link>
        <router-link to="/signup" class="tablinks">Sign Up</router-link>
    </div>
</template>

<script>
import router from '@/router/router'
import { removeItem } from '@/config/utils'

export default {
  name: 'signup_header',
  methods: {
    logout () {
      removeItem('user')
      router.push('/login')
    },
    g_logout() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        localStorage.setItem('is_user_signed_in', false)
        localStorage.setItem('signed_in_user', '')

        console.log('User signed out.');
        router.push('/login')
      });
    }
  }
}
</script>
