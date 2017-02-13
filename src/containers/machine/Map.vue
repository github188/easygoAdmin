<template>
  <div class="row" style="height:730px" id="machine-map">
    <baidu-map>
      <map-view class="map-view">
    </baidu-map>
  </div>
</template>

<script>
  export default{
    name: 'MachineMap',
    data () {
      return {
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .map-view {
    width: 400px;
    height: 300px;
  }
</style>
