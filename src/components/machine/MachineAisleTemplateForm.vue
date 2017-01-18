<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="aisleTempalteDescForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">模板名称</label>
            <div class="col-md-4">
              <input type="text" ng-model="aisleTemplateDesc.templateName" required placeholder="输入唯一的模板名称" class="form-control">
            </div>
            <label class="col-md-2 control-label">机器类型</label>
            <div class="col-md-4">
              <select ng-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required ng-if="!isEdit">
                <option value="{{machineType.machineTypeId}}" ng-repeat="machineType in machineTypeList"
                        ng-selected="{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}">{{machineType.typeName}}</option>
              </select>
              <select ng-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required ng-if="isEdit" ng-disabled="true">
                <option value="{{machineType.machineTypeId}}" ng-repeat="machineType in machineTypeList"
                        ng-selected="{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}">{{machineType.typeName}}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">应用场景</label>
            <div class="col-md-10">
              <input type="text" ng-model="aisleTemplateDesc.applySceneDesc" required placeholder="输入应用场景描述" class="form-control">
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.name">
            <i class="fa fa-warning"></i>{{invalidMessage.name}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="aisleTempalteDescForm.$invalid" value="保存">
      </div>
    </form>
  </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
