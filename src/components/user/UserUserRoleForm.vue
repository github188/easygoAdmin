<template>
  <div class="user-org-link-form-bc">
    <form class="form-horizontal" ng-submit="saveUserRole()">
      <div class="modal-body">
        <fieldset>
          <legend>给【用户:{{userInfo.userName}}】授权角色</legend>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h6 class="panel-title">角色列表</h6>
            </div>
            <div class="panel-body">
              <div class="row" ng-repeat="(key, value) in roleList | groupBy: 'level' | orderBy:'level'">
                <div class="row">
                  <div class="form-group col-md-12 text-center">
                    <div ng-class="inputClass" class="col-md-2">
                      <label class="control-label" style="font-size:16px">
                        {{key}}--{{key | roleLevel : true}}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-1 text-center"></div>
                  <div class="form-group col-md-11 text-center">
                    <div ng-class="inputClass" class="col-md-2" ng-repeat="role in value | orderBy:'roleId'">
                      <label class="control-label">
                        <input type="checkbox" checklist-model="userInfo.role" checklist-value="role.roleId"> {{role.roleName}}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.$infoForm">
            <i class="fa fa-warning"></i>{{$scope.invalidMessage.$infoForm}}
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
