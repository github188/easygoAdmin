<template>
  <div class="user-role-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="roleForm" novalidate>
      <div class="modal-body">
        <legend>角色授权</legend>
        <fieldset>
          <div class="panel panel-primary" ng-repeat="firstRule in ruleList | filter : {'level':'1'} : true | orderBy:'ruleCode'">
            <div class="panel-heading">
              <h6 class="panel-title">
                <label for="input-params" ng-click="showLabel = !showLabel;" ng-init="showLabel = false;">
                  <i class="fa fa-chevron-circle-right" ng-if="!showLabel"></i>
                  <i class="fa fa-chevron-circle-down" ng-if="showLabel"></i>
                  <span >&nbsp;&nbsp;{{firstRule.name}}</span>
                </label>
                <button type="button" class="btn btn-xs btn-success" style="float:right" ng-click="cancelAll(firstRule.ruleCode)"><i class="fa fa-square-o"></i>&nbsp;全不选</button>
                <button type="button" class="btn btn-xs btn-success" style="float:right" ng-click="selectAll(firstRule.ruleCode)"><i class="fa fa-check-square-o"></i>&nbsp;全选</button>
              </h6>
            </div>
            <div class="panel-body" ng-if="showLabel">
              <div class="row" ng-repeat="secondRule in ruleList | filter : {'upRuleCode':firstRule.ruleCode, 'level':'2'} : true | orderBy:'ruleCode'">
                <div class="row">
                  <div class="form-group col-md-12 text-center">
                    <div ng-class="inputClass" class="col-md-4">
                      <label class="control-label" style="font-size:16px">
                        {{secondRule.name}}
                      </label>
                      <label class="control-label">
                        <button type="button" class="btn btn-xs btn-primary" ng-click="selectAll(secondRule.ruleCode)"><i class="fa fa-check-square-o"></i>&nbsp;全选</button>
                        <button type="button" class="btn btn-xs btn-primary" ng-click="cancelAll(secondRule.ruleCode)"><i class="fa fa-square-o"></i>&nbsp;全不选</button>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-1 text-center"></div>
                  <div class="form-group col-md-11 text-center">
                    <div ng-class="inputClass" class="col-md-2" ng-repeat="threeRule in ruleList | filter : {'upRuleCode':secondRule.ruleCode, 'level':'3'} : true | orderBy:'ruleCode'">
                      <label class="control-label">
                        <input type="checkbox" checklist-model="rules" checklist-value="threeRule.ruleCode"> {{threeRule.name}}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </fieldset>
      </div>
      <div class="modal-footer">
        <!-- <a href="" class="btn btn-default" ng-click="import()">导入规则</a> -->
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="roleForm.$invalid" value="保存">
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
