<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>支付流水信息---{{payLineInfo.payType}}</legend>
          <div ng-if="payLineInfo.hasPay===true">
            <div ng-switch on="payLineInfo.payType">
              <div ng-switch-when="微信">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">微信交易编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.transactionId}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.totalFee/100 |
                    currency:"￥"}}</label>
                </div>

              </div>
              <div ng-switch-when="支付宝">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付宝交易编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.tradeNo}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.buyerPayAmount/100 |
                    currency:"￥"}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付宝账号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.buyerLogonId}}</label>
                </div>

              </div>
              <div ng-switch-when="羊城通">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.logicalCardNo}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.amount/100 |
                    currency:"￥"}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡内余额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.balance/100 |
                    currency:"￥"}}</label>
                </div>
              </div>
              <div ng-switch-when="深圳通">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.logicalCardNo}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.amount/100 |
                    currency:"￥"}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡内余额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.balance/100 |
                    currency:"￥"}}</label>
                </div>
              </div>
              <div ng-switch-when="光明卡">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.egocardPayCardNumber}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.egocardPayAmount/100 |
                    currency:"￥"}}</label>
                </div>
              </div>
              <div ng-switch-when="易购卡">
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">机器编号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.machineCode}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">卡号:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.egocardPayCardNumber}}</label>
                </div>
                <div class="form-group">
                  <label class="col-md-offset-2 col-md-3 text-right">支付金额:</label>
                  <label class="col-md-5 text-left">{{payLineInfo.record.egocardPayAmount/100 |
                    currency:"￥"}}</label>
                </div>
              </div>
              <div ng-switch-default>
                暂时不支持查询支付明细
              </div>
            </div>
          </div>
          <h3 ng-if="payLineInfo.hasPay===false">未找到支付流水,有可能用户未支付成功!</h3>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
      </div>
    </form>
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
