<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-10">
          <h3>
            利润统计&nbsp;&nbsp;&nbsp;&nbsp;
          </h3>
        </div>
        <div class="col-md-2" ng-show="false">
          <button class="btn btn-default" ng-click="export()" ng-if="$root.haveAuth('040302', currentUser.rules)">
            导出Excel
          </button>
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
                     ivh-treeview-expand-to-depth="2"
                     ivh-treeview-use-checkboxes="true"
                     ivh-treeview-on-cb-change="changeCallback(ivhNode)"
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
            <h6 class="panel-title">利润统计列表</h6>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12">
                <form class="form-horizontal" name="orderForm" novalidate>
                  <div class="form-group">
                    <label class="col-md-2 control-label">订单时间</label>

                    <div class="col-md-4">
                      <p class="input-group">
                        <input class="form-control" ng-readonly="true" show-weeks="false"
                               is-open="status.startOpen" datepicker-popup="yyyy-MM-dd"
                               ng-model="profitSearch.startDate" datepicker-options="dateOptions"
                               required="true"/>
                        <span class="input-group-btn">
										        <button type="button" class="btn btn-default" ng-click="startOpen()"><i
                              class="glyphicon glyphicon-calendar"></i></button>
										    </span>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p class="input-group">
                        <input class="form-control" ng-readonly="true" show-weeks="false"
                               is-open="status.endOpen" datepicker-popup="yyyy-MM-dd"
                               ng-model="profitSearch.endDate" required="true"/>
                        <span class="input-group-btn">
										        <button type="button" class="btn btn-default" ng-click="endOpen()"><i
                              class="glyphicon glyphicon-calendar"></i></button>
										    </span>
                      </p>
                    </div>
                    <div class="col-md-2">
                      <button type="button" ng-click="search()" ng-disabled="orderForm.$invalid"
                              class="btn btn-success"><i class="fa fa-search"></i> 查询
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="bs-component">
              <div us-spinner spinner-key="agentTable" class="table-responsive">
                <table class="table table-striped table-hover">
                  <tr>
                    <th>商品名称</th>
                    <th>销售数量</th>
                    <th>进货总金额</th>
                    <th>销售总金额</th>
                    <th>销售利润</th>
                    <th>利润率</th>
                  </tr>
                  <tr ng-repeat="profit in profitList | orderBy:'-soldTotalAmount'">
                    <td>
                      {{profit.goodsSkuSubject}}
                    </td>
                    <td>
                      {{profit.goodsSoldTotalQuantity}}
                    </td>
                    <td>
                      {{profit.purchaseTotalAmount/100 | currency:"￥"}}
                    </td>
                    <td>
                      {{profit.soldTotalAmount/100 | currency:"￥"}}
                    </td>
                    <td>
                      {{profit.profitTotalAmount/100 | currency:"￥"}}
                    </td>
                    <td>
                      {{profit.profitTotalAmount/profit.soldTotalAmount*100 | number:2}}%
                    </td>
                  </tr>
                  <tr>
                    <th>
                      合计
                    </th>
                    <th>
                      {{profitTotal.goodsSoldTotalQuantity}}
                    </th>
                    <th>
                      {{profitTotal.purchaseTotalAmount/100 | currency:"￥"}}
                    </th>
                    <th>
                      {{profitTotal.soldTotalAmount/100 | currency:"￥"}}
                    </th>
                    <th>
                      {{profitTotal.profitTotalAmount/100 | currency:"￥"}}
                    </th>
                    <th>

                    </th>
                  </tr>
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
