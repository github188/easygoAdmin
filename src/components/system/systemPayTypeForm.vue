<template>
  <div class="pay-type-form-bc">
    <form class="form-horizontal" ng-submit="save()">
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-3 control-label">支付方式名称</label>
            <div class="col-md-4">
              <input type="text" ng-model="payType.payName" required placeholder="输入支付方式的名称" class="form-control">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" value="保存">
      </div>
    </form>
  </div>
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
