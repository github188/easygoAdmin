<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        支付方式&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" ng-click="openForm()" ng-if="$root.haveAuth('050102', currentUser.rules)">
          <i class="fa  fa-pencil-square-o"></i>&nbsp;新建支付方式
        </button>
      </h3>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="pay-type-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover">
          <tr>
            <th>ID</th>
            <th>支付方式</th>
            <th>操作
              <button class="btn btn-xs btn-default pull-right"
                      ng-click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr ng-repeat="payType in providePayTypes">
            <td>
              {{payType.id}}
            </td>
            <td>
              {{payType.payName}}
            </td>
            <td>
              <button class="btn btn-sm btn-primary"
                      data-ng-click="openForm(payType)" ng-if="$root.haveAuth('050103', currentUser.rules)"><i
                class="fa  fa-pencil-square-o"></i>&nbsp;修改
              </button>
              <button class="btn btn-sm btn-danger"
                      data-ng-click="delete(payType)" ng-disabled="true"
                      ng-if="$root.haveAuth('050104', currentUser.rules)"><i class="fa fa-trash-o"></i>&nbsp;删除
              </button>
            </td>
          </tr>
        </table>
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
