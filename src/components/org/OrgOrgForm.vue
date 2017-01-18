<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="orgForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-4 control-label">组织名称</label>
            <div class="col-md-8">
              <input type="text" ng-model="orgInfo.orgFormName" required placeholder="输入组织名称" class="form-control">
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.$infoForm">
            <i class="fa fa-warning"></i>{{$scope.invalidMessage.$infoForm}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="orgForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
