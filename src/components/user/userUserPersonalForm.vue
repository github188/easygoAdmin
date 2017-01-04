<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="userPersonalForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>
            <small>上次登录时间:{{userInfo.lastLoginTime | date : 'yyyy-MM-dd HH:mm:ss'}}</small>
          </legend>
          <div class="form-group">
            <label class="col-md-2 control-label">中文名</label>

            <div class="col-md-4">
              <input type="text" name="chineseName" ng-model="userInfo.chineseName" ng-maxlength="8" required
                     placeholder="真实姓名" class="form-control">
              <span ng-show="userPersonalForm.chineseName.$invalid" class="help-block">真实姓名不能为空,最长为8位.</span>
            </div>

            <label class="col-md-2 control-label">上次登录IP</label>

            <div class="col-md-4">
              <input type="text" readonly name="email" ng-model="userInfo.lastLoginIp" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">邮箱</label>

            <div class="col-md-4">
              <input type="email" name="email" ng-model="userInfo.email"
                     ng-pattern="/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/"
                     placeholder="电子邮箱地址" class="form-control">
              <span ng-show="userPersonalForm.email.$invalid" class="help-block">邮箱格式不正确.</span>
            </div>
            <label class="col-md-2 control-label">手机号</label>

            <div class="col-md-4">
              <input type="text" name="mobile" ng-model="userInfo.mobile"
                     ng-pattern="/(^(13\d|15[^4,\D]|17[13678]|18\d)\d{8}|170[^346,\D]\d{7})$/"
                     placeholder="常用手机号" class="form-control">
              <span ng-show="userPersonalForm.mobile.$invalid" class="help-block">手机号格式不正确.</span>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="userPersonalForm.$invalid" value="保存">
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
