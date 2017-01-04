<template>
  <div class="machine-org-form-bc">
    <form class="form-horizontal" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>选择组织</legend>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h6 class="panel-title">组织</h6>
            </div>
            <div class="panel-body">
              <fieldset>
                <treecontrol class="tree-classic" tree-model="treeData" selected-node="selectedNode"
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
