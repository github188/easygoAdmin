<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-md-5 control-label">机器编号:</label>
      <div class="col-md-5">
        <p class="form-control-static">{{machineCode}}
        </p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-5 control-label">机器位置:</label>
      <div class="col-md-5">
        <p class="form-control-static">{{address}}
        </p>
      </div>
    </div>
  </form>
</template>

<script>
  export default{
    name: 'MachineMapInfoWindow',
    props: ['machineCode', 'address'],
    data () {
      return {

      }
    },
    components: {},
    mounted () {
    },
    watch: {},
    methods: {
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">

</style>
