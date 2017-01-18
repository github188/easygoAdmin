<template>
  <div id="app" :class="['skin-blue-light', 'fixed', 'sidebar-mini', sidebarToggle ? sidebar : '']">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      sidebarToggle () {
        return this.$store.state.admin.sidebarToggle
      },
      sidebar () {
        if (window.screen.width >= 768) {
          return 'sidebar-collapse'
        } else {
          return 'sidebar-open'
        }
      }
    }
  }
</script>

<style lang="scss">
  #app{
    overflow-x: hidden;
    overflow-y: auto;
  }
  #app,
  body,
  html {
    height: 100%;
    width: 100%;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  button,
  input,
  select,
  textarea {
    outline: none;
  }
</style>
