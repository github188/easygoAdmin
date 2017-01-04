<template>
  <div class="goods-org-form-bc">
    <form class="form-horizontal" name="goodsBaseForm" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>To【{{goodsInfo.skuPackageType}}--{{goodsInfo.skuSubject}}】授权组织</legend>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h6 class="panel-title">组织</h6>
            </div>
            <div class="panel-body">
              <fieldset>
                <input type="text" class="form-control" placeholder="过滤关键字" ng-model="predicate">
                <treecontrol class="tree-classic" tree-model="treeData" on-selection="showSelected(node)"
                             filter-expression="predicate" filter-comparator="comparator"
                             expanded-nodes="expandedNodes" options="treeOptions">
                  {{node.orgName}}
                </treecontrol>
              </fieldset>
            </div>
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

</script>


<style lang="scss" scoped>

</style>
