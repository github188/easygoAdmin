<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-10">
          <h3>组织架构&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        </div>
      </div>
    </div>
    <script type="text/ng-template" id="nodes_renderer.html">
        <div ui-tree-handle class="tree-node tree-node-content">
            <a class="btn btn-success btn-xs" ng-if="node.childrens && node.childrens.length > 0" data-nodrag
               ng-click="toggle(this)"><span
                    class="glyphicon"
                    ng-class="{
          'glyphicon-chevron-right': collapsed,
          'glyphicon-chevron-down': !collapsed
        }"></span></a>
            {{node.orgName}}
            <button class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="delete(node)"
                    tooltip="删除组织" tooltip-trigger tooltip-placement="top" confirm="删除后将不能恢复，确定删除该组织吗?"
                    ng-if="$root.haveAuth('090104', currentUser.rules)">
                <i class="fa fa-trash-o"></i>&nbsp;删除
            </button>
            <button class="pull-right btn btn-primary btn-xs" type="submit" data-nodrag
                    ng-click="openForm(node, 'edit')"
                    tooltip="编辑组织" tooltip-trigger tooltip-placement="top"
                    ng-if="$root.haveAuth('090103', currentUser.rules)">
                <i class="fa fa-pencil-square-o"></i>&nbsp;编辑
            </button>
            <button class="pull-right btn btn-primary btn-xs" type="submit" data-nodrag ng-click="openForm(node, 'add')"
                    tooltip="新增组织" tooltip-trigger tooltip-placement="top"
                    ng-if="$root.haveAuth('090102', currentUser.rules)">
                <i class="fa fa-plus"></i>&nbsp;新增
            </button>
        </div>
        <ol ui-tree-nodes="" ng-model="node.childrens" ng-class="{hidden: collapsed}">
            <li ng-repeat="node in node.childrens" ui-tree-node ng-include="'nodes_renderer.html'">
            </li>
        </ol>
    </script>

    <div class="row">
      <div class="col-sm-12">
        <div ui-tree id="tree-root" ng-if="$root.haveAuth('090101', currentUser.rules)">
          <ol ui-tree-nodes ng-model="data">
            <li ng-repeat="node in data" ui-tree-node
                ng-include="'nodes_renderer.html'"></li>
          </ol>
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
