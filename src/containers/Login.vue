<template>
  <div id="login">
    <userLogin></userLogin>
  </div>
</template>

<script>
import userLogin from '../components/user/userLogin'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    userLogin
  }
}
</script>

<style lang="scss" scoped>

</style>
