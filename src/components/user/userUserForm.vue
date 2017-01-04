<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="userForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">用户名</label>
            <div class="col-md-4">
              <input type="text" name="userName" ng-model="userInfo.userName" ng-pattern="/^[0-9A-Za-z_]{5,16}$/" ng-disabled="isEdit"
                     required placeholder="6-16位字母、数字和下划线" class="form-control">
              <span ng-show="userForm.userName.$invalid" class="help-block">用户名不能为空,长度为5-16位,只能字母、数字和下划线组成.</span>
            </div>
            <label ng-if="!isEdit" class="col-md-2 control-label">密码</label>
            <label ng-if="isEdit" class="col-md-2 control-label">重置密码</label>
            <div class="col-md-4">
              <input ng-if="!isEdit" type="password" ng-model="userInfo.password" required placeholder="登录密码" class="form-control">
              <input ng-if="isEdit" type="password" ng-model="userInfo.password" placeholder="重置密码才需要填写" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">中文名</label>
            <div class="col-md-4">
              <input type="text" name="chineseName" ng-model="userInfo.chineseName" ng-maxlength="8" required placeholder="真实姓名" class="form-control">
              <span ng-show="userForm.chineseName.$invalid" class="help-block">真实姓名不能为空,最长为8位.</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">邮箱</label>
            <div class="col-md-4">
              <input type="email" name="email" ng-model="userInfo.email" ng-pattern="/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/" placeholder="电子邮箱地址" class="form-control">
              <span ng-show="userForm.email.$invalid" class="help-block">邮箱格式不正确.</span>
            </div>
            <label class="col-md-2 control-label">手机号</label>
            <div class="col-md-4">
              <input type="text" name="mobile" ng-model="userInfo.mobile" ng-pattern="/(^(13\d|15[^4,\D]|17[13678]|18\d)\d{8}|170[^346,\D]\d{7})$/" placeholder="常用手机号" class="form-control">
              <span ng-show="userForm.mobile.$invalid" class="help-block">手机号格式不正确.</span>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="userForm.$invalid" value="保存">
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
