<template>
  <treecontrol class="tree-classic" tree-model="treeData"
               on-selection="showSelected(node)" options="treeOptions">
    {{node.orgName}}
  </treecontrol>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      alertDanger: false,
      danger: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    let _this = this
    if (_this.danger) {
      _this.alertDanger = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
