<template>
  <div id="app" :class="['skin-blue-light', 'fixed', 'sidebar-mini', sidebar ? 'sidebar-collapse' : '']">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    sidebar () {
      return this.$store.state.admin.sidebarToggle
    }
  }
}
</script>

<style lang="scss">
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
