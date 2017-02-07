<template>
  <div id="container">
    <NavbarMain></NavbarMain>
    <AdminAlert></AdminAlert>
    <div class="content-wrapper ng-scope" :style="{minHeitht: contentWarpperMinHeight}">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <footer class="main-footer">
      <p class="center-block text-center ng-binding">© {{year}} 前海易购 版权所有</p>
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
    computed: {
      contentWarpperMinHeight () {
        if (window.screen < 768) {
          let minHeight = window.screen.height * 0.82
          return minHeight
        } else {
          let minHeight = window.screen.height * 1.46
          return minHeight
        }
      },
      year () {
        return this.GetDate(0)
      }
    },
    mounted () {
    },
    methods: {
      GetDate (AddDayCount) {
        let dd = new Date()
        dd.setDate(dd.getDate() + AddDayCount)
        const y = dd.getFullYear()
        return y
      }
    },
    components: {
      NavbarMain,
      AdminAlert
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    height: 100%;
    overflow: auto;
    .content-wrapper {
      border-left: 0;
    }
    footer{
      position: fixed;
      bottom: 0;
      /*top: 0;*/
      right: 0;
      left: 0;
      border-left:0;
      padding:0;
      p{
        margin:0 0 0;
      }
    }
  }
</style>
