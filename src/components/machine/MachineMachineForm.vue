<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" name="machineBaseForm" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">设备名称</label>
            <div class="col-md-4">
              <input type="text" ng-model="machineInfo.machineName" required placeholder="设备自定义名称" class="form-control">
            </div>
          </div>
          <div class="form-group" ng-show="$root.haveAuth('010309', currentUser.rules)">
            <label class="col-md-2 control-label">支付方式</label>
            <div ng-class="$index==5||$index==10?'col-md-offset-2':''" class="col-md-2" ng-repeat="payType in payTypeList" required>
              <label class="control-label">
                <input type="checkbox" checklist-model="machineInfo.providePayType" checklist-value="payType.id"> {{payType.payName}}
              </label>
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.name">
            <i class="fa fa-warning"></i>{{invalidMessage.name}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="machineBaseForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
