<template>
  <div id="login">
    <UserLogin></UserLogin>
  </div>
</template>

<script>
import UserLogin from '../components/user/UserLogin'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    UserLogin
  }
}
</script>

<style lang="scss" scoped>

</style>
