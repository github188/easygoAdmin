<template>
  <div class="row">
    <div class="col-md-12" ng-if="$root.haveAuth('040101', currentUser.rules)">

      <!-- Control Sidebar -->
      <aside ng-class="{'control-sidebar-open': openedOrg}" class="control-sidebar no-padding control-sidebar-light">
        <div class="box box-widget no-border no-shadow">
          <div class="box-header">
            <h3 class="box-title">组织列表</h3>

            <div class="box-tools pull-right">
              <button type="button" ng-click="closeOrg()" class="btn btn-box-tool"><i
                class="fa fa-times"></i></button>
            </div>
            <!-- /.box-tools -->
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <treecontrol class="tree-classic" tree-model="treeData" selected-node="selectedNode"
                         on-selection="selectOrg(node)" expanded-nodes="expandedNodes" options="treeOptions">
              {{node.orgName}}
            </treecontrol>
          </div>
          <!-- /.box-body -->
        </div>
      </aside>
      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>

      <div class="box box-widget">
        <div class="box-body">
          <form class="form-inline" novalidate>
            <div class="input-group">
              <input type="text" disabled value="{{selectedNode.orgName}}" class="form-control" placeholder="组织名称">
              <span class="input-group-btn">
                            <button ng-click="openOrg()" class="form-control btn btn-default" type="button"><i
                              class="fa fa-sitemap"></i>选择组织
                            </button>
                          </span>
            </div>
            <!-- /input-group -->
            <div class="form-group" style="margin: 0 10px;">
              <label class="control-label">订单时间:</label>

              <input type="text" ng-model="orderSearch.startEndDate" class="form-control" id="dateRangePicker" date-range-picker>

            </div>
            <div class="form-group" style="margin: 0 10px;">
              <label class="control-label">机器编号:</label>

              <input style="max-width: 120px;" type="text" ng-model="orderSearchPlus.machineCode" class="form-control"
                     placeholder="模糊查询编号"/>
            </div>
            <div class="form-group" style="margin: 0 10px;">
              <label class="control-label">支付类型:</label>

              <select ng-model="orderSearchPlus.payType" style="min-width: 88px" class="form-control">
                <option value="">--</option>
                <option value="{{payType.payName}}" ng-repeat="payType in payTypeList">
                  {{payType.payName}}
                </option>
              </select>
            </div>
            <div class="form-group" style="margin: 10px;">
              <button type="button" ng-click="search()" ng-disabled="orderForm.$invalid"
                      class="btn btn-success"><i class="fa fa-search"></i> 查询
              </button>
            </div>
          </form>
        </div>
      </div>

      <div us-spinner spinner-key="order-list-spinner" class="col-md-12">
        <div class="box box-widget">
          <div class="box-header">
            <h3 class="box-title">订单查询</h3>
            <div class="box-tools">
              <div class="input-group">
                <button class="btn btn-default pull-right" ng-click="export()"
                        ng-disabled="exportDisabled"
                        ng-if="$root.haveAuth('040102', currentUser.rules)">导出Excel
                </button>
              </div>
            </div>
          </div>
          <div class="box-body table-responsive no-padding">
            <table class="table table-striped table-hover">
              <tr>
                <th>机器编号</th>
                <th>支付类型</th>
                <th>订单金额</th>
                <th>订单状态</th>
                <th>出货状态</th>
                <th>所在货道</th>
                <th>商品名称</th>
                <th>售出价格</th>
                <th>售出数量</th>
                <th>订单时间</th>
              </tr>
              <tr ng-repeat="orderDetail in orderDetails">
                <td>
                  {{orderDetail.machineName}}
                </td>
                <td>
                  {{orderDetail.payType}}
                </td>
                <td>
                  {{orderDetail.orderTotalAmount/100 | currency:"￥"}}
                </td>
                <td>
                  <a ng-if="$root.haveAuth('040103', currentUser.rules)"
                     ng-click="showPayLine(orderDetail.payType,orderDetail.payLineNumber,orderDetail.machineName)"
                     role="button" class="btn-link">{{orderDetail.orderStatus | payStatus}}</a>
                  <span ng-if="!$root.haveAuth('040103', currentUser.rules)">{{orderDetail.orderStatus | payStatus}}</span>
                </td>
                <td>
                  {{orderDetail.shipmentStatus | deliveryStatus}}
                </td>
                <td>
                  {{orderDetail.aisleName}}
                </td>
                <td>
                  {{orderDetail.goodsSkuSubject}}
                </td>
                <td>
                  {{orderDetail.goodsSoldPrice/100 | currency:"￥"}}
                </td>
                <td>
                  {{orderDetail.goodsSoldQuantity}}
                </td>
                <td>
                  {{orderDetail.gmtCreated | date : 'yyyy-MM-dd HH:mm:ss' }}
                </td>
              </tr>
            </table>
          </div>
          <div class="row text-center">
            <pagination class="pagination-sm" boundary-links="true"
                        max-size="6"
                        items-per-page="itemsPerPage"
                        total-items="pageOrder.totalElements"
                        ng-model="currentPage"
                        ng-change="pageChanged(currentPage)"
                        previous-text="&lt;" next-text="&gt;"
                        first-text="&lt;&lt;" last-text="&gt;&gt;"></pagination>
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
