<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" name="applyAisleTempalteForm" ng-submit="save()" novalidate >
      <div class="modal-body">
        <fieldset>
          <legend>应用机器模板</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">机器类型</label>
            <div class="col-md-6">
              <select ng-model="machineTypeId" ng-disabled="disabled||selectedMachineTypeId" class="form-control" required ng-change="showTemplateDesc(machineTypeId)">
                <option value=""></option>
                <option ng-selected="selectedMachineTypeId==machineType.machineTypeId" value="{{machineType.machineTypeId}}" ng-repeat="machineType in machineTypeList">{{machineType.typeName}}</option>
              </select>
            </div>
          </div>
          <div class="form-group" ng-show="machineAisleTemplateDescList">
            <label class="col-md-2 control-label">绑定模板</label>
            <div class="col-md-6">
              <select ng-model="bindingTemplateView.goodsAisleTemplateId" class="form-control" required>
                <option value=""></option>
                <option value="{{machineAisleTemplateDesc.goodsAisleTemplateId}}" ng-repeat="machineAisleTemplateDesc in machineAisleTemplateDescList">
                  {{machineAisleTemplateDesc.templateName}}
                </option>
              </select>
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.errorMsg">
            <i class="fa fa-warning"></i>您选择的机器有{{invalidMessage.errorMsg}}多个机型,无法应用单个模板
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="applyAisleTempalteForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
