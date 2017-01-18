<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" name="machineBaseForm" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>【{{machineInfo.machineCode}}】的详细信息</legend>
          <div class="form-group">
            <label class="col-md-3 control-label">设备名称</label>
            <div class="col-md-9">
              <input type="text" ng-model="machineInfo.machineName" ng-disabled="true" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">机器类型</label>
            <div class="col-md-9">
              <input type="text" ng-model="machineInfo.machineTypeInfo.typeName" ng-disabled="true" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">模板名称</label>
            <div class="col-md-9">
              <input type="text" ng-model="machineInfo.machineAisleTemplateDescription.templateName" ng-disabled="true" class="form-control">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
