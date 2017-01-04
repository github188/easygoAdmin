<template>
  <div id="login">
    woshi login
    <userLogin></userLogin>
  </div>
</template>

<script>
import userLogin from '../components/user/userLogin'
export default {
  name: 'Login',
  data () {
    return {
      alertDanger: false,
      danger: null,
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
