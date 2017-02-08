<template>
  <div class="center-block box box-widget no-padding" style="max-width: 430px">
    <h3>使用说明</h3>
    <h4>先调整好一台机器的货道陈列,然后其他机器可以复制这台机器的陈列</h4>
    <div class="box-header with-border">
      <h3 class="box-title ">复制机器货道信息,请输入<span class="text-warning">完整机器编号</span></h3>
    </div>
    <form @submit.prevent autocomplete="off">
      <div class="box-body">
        <div class="form-group">
          <label for="inputFrom" class="control-label">从</label>
          <input type="text" v-model="copy.from" class="form-control" id="inputFrom" placeholder="设备编号">
        </div>
        <div class="form-group">
          <label for="inputTo" class="control-label">复制到</label>
          <input type="text" v-model="copy.to" class="form-control" id="inputTo" placeholder="设备编号">
        </div>
      </div>
      <div class="box-footer text-center">
        <button type="submit" @click="machineCopy" class="btn btn-default">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'MachineCopy',
    data () {
      return {
        copy: {
          from: '',
          to: ''
        }
      }
    },
    components: {},
    methods: {
      machineCopy () {
        console.log(this.copy.from)
        console.log(this.copy.to)
      }
    }
  }
</script>

<style lang="scss">
</style>
