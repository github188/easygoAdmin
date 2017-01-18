<template>
  <div id="container">
    <navbarMain></navbarMain>
    <AdminAlert></AdminAlert>
    <router-view></router-view>
  </div>
</template>
<script>
  import navbarMain from '../components/navbar/navbarMain'
  import AdminAlert from '../components/alert/adminAlert'
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {
      navbarMain,
      AdminAlert
    }
  }
</script>

<style lang="scss" scoped>
</style>
