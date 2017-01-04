<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        货道模板&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" ng-click="openForm()" ng-show="$root.haveAuth('010202', currentUser.rules)">
          <i class="fa  fa-pencil-square-o"></i>&nbsp;新建模板
        </button>
      </h3>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="machine-template-aisle-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover">
          <tr>
            <th>ID</th>
            <th>模板名称</th>
            <th>机型名称</th>
            <th>应用场景描述</th>
            <th>操作
              <button class="btn btn-xs btn-default pull-right"
                      ng-click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr ng-repeat="machineAisleTemplateDesc in machineAisleTemplateDescs">
            <td>
              {{$index+1}}
            </td>
            <td>
              {{machineAisleTemplateDesc.templateName}}
            </td>
            <td>
              {{machineAisleTemplateDesc.machineTypeInfo.typeName}}
            </td>
            <td>
              {{machineAisleTemplateDesc.applySceneDesc}}
            </td>
            <td>
              <button class="btn btn-sm btn-primary"
                      data-ng-click="setAisle(machineAisleTemplateDesc)"
                      ng-show="$root.haveAuth('010205', currentUser.rules)">设置货道
              </button>
              <button class="btn btn-sm btn-primary"
                      data-ng-click="openForm(machineAisleTemplateDesc)"
                      ng-show="$root.haveAuth('010203', currentUser.rules)">修改
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>

</style>
