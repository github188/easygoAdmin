<template>
  <div id="container">
    <NavbarMain></NavbarMain>
    <AdminAlert></AdminAlert>
    <div class="content-wrapper ng-scope" style="min-height: 142px;">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <footer class="main-footer">
      <p class="center-block text-center ng-binding">© 2017 前海易购 版权所有</p>
    </footer>
  </div>
</template>
<script>
  import NavbarMain from '../components/navbar/NavbarMain'
  import AdminAlert from '../components/alert/AdminAlert'
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {
      NavbarMain,
      AdminAlert
    }
  }
</script>

<style lang="scss" scoped>
</style>
