<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        用户列表&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" ng-click="openForm()"
                ng-if="$root.haveAuth('090202', currentUser.rules)">
          <i class="fa  fa-pencil-square-o"></i>&nbsp;新建用户
        </button>
      </h3>
    </div>
    <div class="row" ng-show="$root.haveAuth('090201', currentUser.rules)">
      <div class="col-md-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">组织</h6>
          </div>
          <div class="panel-body ego-tree-height">
            <form class="form-horizontal">
              <fieldset>
                <treecontrol class="tree-classic" tree-model="treeData" on-selection="showSelected(node)"
                             expanded-nodes="expandedNodes" options="treeOptions">
                  {{node.orgName}}
                </treecontrol>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">用户列表</h6>
          </div>
          <div class="panel-body">
            <div class="bs-component">
              <div us-spinner spinner-key="agentTable" class="table-responsive">
                <table class="table table-striped table-hover ">
                  <tr>
                    <th>用户名</th>
                    <th>中文名</th>
                    <th>组织</th>
                    <th>手机号</th>
                    <th>创建时间</th>
                    <th>操作</th>
                  </tr>
                  <tr ng-repeat="user in userInfos">
                    <td>
                      {{user.userInfo.userName}}
                    </td>
                    <td>
                      {{user.userInfo.chineseName}}
                    </td>
                    <td>
                      {{user.orgName}}
                    </td>
                    <td>
                      {{user.userInfo.mobile}}
                    </td>
                    <td>
                      {{user.userInfo.gmtCreated | date : 'yyyy-MM-dd HH:mm'}}
                    </td>
                    <td>
                      <button class="btn btn-xs btn-primary"
                              data-ng-click="openForm(user.userInfo)"
                              ng-if="$root.haveAuth('090203', currentUser.rules)">修改
                      </button>
                      <button class="btn btn-xs btn-primary"
                              data-ng-click="openOrgForm(user)"
                              ng-if="$root.haveAuth('090205', currentUser.rules)">授权组织
                      </button>
                      <button class="btn btn-xs btn-primary"
                              data-ng-click="openRoleForm(user.userInfo)"
                              ng-if="$root.haveAuth('090206', currentUser.rules)">授权角色
                      </button>
                      <button class="btn btn-xs btn-danger" ng-disabled="userInfo.userId===1"
                              data-ng-click="delete(user.userInfo)"
                              confirm="确定删除用户：{{user.userInfo.userName}}?"
                              confirm-settings="{size: 'sm'}"
                              ng-show="$root.haveAuth('090204', currentUser.rules)"><i
                        class="fa fa-trash-o"></i>&nbsp;删除
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="row text-center">
                <pagination class="pagination-sm" boundary-links="true"
                            max-size="6"
                            items-per-page="itemsPerPage"
                            total-items="totalSize"
                            ng-model="currentPage"
                            ng-change="pageChanged(currentPage)"
                            previous-text="&lt;" next-text="&gt;"
                            first-text="&lt;&lt;" last-text="&gt;&gt;"></pagination>
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
