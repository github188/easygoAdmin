<template>
  <div class="user-role-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="roleForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">角色名</label>
            <div class="col-md-10">
              <input type="text" ng-model="roleInfo.roleName" required placeholder="如：管理员，财务" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">角色级别</label>
            <div class="col-md-4">
              <select ng-model="roleInfo.level" required class="form-control">
                <option value="1">系统管理</option>
                <option value="2">运营管理</option>
                <option value="3">基础运营</option>
              </select>
            </div>
            <label class="col-md-2 control-label">状态</label>
            <div class="col-md-4">
              <select ng-model="roleInfo.status" required class="form-control">
                <option value="1">启用</option>
                <option value="0">禁用</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">角色描述</label>
            <div class="col-md-10">
              <input type="text" ng-model="roleInfo.description" required placeholder="角色具体职责详细描述" class="form-control">
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.$infoForm">
            <i class="fa fa-warning"></i>{{$scope.invalidMessage.$infoForm}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="roleForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
