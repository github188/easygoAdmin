<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12">
          <h3>
            补货查询&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="btn btn-default pull-right" ng-click="export()"
                    ng-if="$root.haveAuth('040202', currentUser.rules)">导出Excel
            </button>
          </h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">组织</h6>
          </div>
          <div class="panel-body ego-tree-height">
            <form class="form-horizontal">
              <fieldset>
                <input type="text" class="form-control" placeholder="过滤关键字"
                       ng-model="predicate">
                <treecontrol class="tree-classic" tree-model="treeData"
                             on-selection="showSelected(node)" filter-expression="predicate"
                             filter-comparator="comparator" expanded-nodes="expandedNodes"
                             options="treeOptions"> {{node.orgName}}
                </treecontrol>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">设备</h6>
          </div>
          <div class="panel-body ego-tree-height">
            <form class="form-horizontal">
              <fieldset>
                <input type="text" class="form-control" placeholder="过滤关键字" ng-model="myQuery">

                <div ivh-treeview="tree"
                     ivh-treeview-expand-to-depth="1"
                     ivh-treeview-filter="myQuery">
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">补货列表</h6>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-10">
                <form class="form-horizontal">
                  <div class="form-group">
                    <div class="col-md-11">
                    </div>
                    <div class="col-md-1 text-right">
                      <button type="button" ng-click="search()" class="btn btn-success"><i
                        class="fa fa-search"></i> 查询
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="bs-component">
              <div us-spinner spinner-key="agentTable" class="table-responsive">
                <table class="table table-striped table-hover">
                  <thead>
                  <tr>
                    <th>商品名称</th>
                    <th>待补货数量</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr ng-repeat="goods in fillGoodsList">
                    <td>
                      {{goods.goodsSubject}}
                    </td>
                    <td>
                      {{goods.needFillStock}}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>

</style>
