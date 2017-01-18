<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-10">
          <h3>
            角色管理&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="btn btn-primary" ng-click="openForm()"
                    ng-if="$root.haveAuth('090302', currentUser.rules)">
              <i class="fa  fa-pencil-square-o"></i>&nbsp;新建角色
            </button>
          </h3>
        </div>
      </div>
    </div>
    <div class="row" ng-if="$root.haveAuth('090301', currentUser.rules)">
      <div class="col-md-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h6 class="panel-title">角色列表</h6>
          </div>
          <div class="panel-body">
            <div class="bs-component">
              <div us-spinner spinner-key="agentTable" class="table-responsive">
                <table class="table table-striped table-hover ">
                  <tr>
                    <th>序号</th>
                    <th>角色名</th>
                    <th>角色级别</th>
                    <th>状态</th>
                    <th>描述</th>
                    <th>创建时间</th>
                    <th>操作</th>
                  </tr>
                  <tr ng-repeat="roleInfo in roleInfos">
                    <td>
                      {{$index + 1}}
                    </td>
                    <td>
                      {{roleInfo.roleName}}
                    </td>
                    <td>
                      {{roleInfo.level | roleLevel}}
                    </td>
                    <td>
                      {{roleInfo.status=='1' ? '启用':'禁用'}}
                    </td>
                    <td>
                      <abbr title="{{roleInfo.description}}">{{roleInfo.description}}</abbr>
                    </td>
                    <td>
                      {{roleInfo.gmtCreated | date : 'yyyy-MM-dd HH:mm'}}
                    </td>
                    <td>
                      <button class="btn btn-sm btn-primary"
                              data-ng-click="openForm(roleInfo)"
                              ng-if="$root.haveAuth('090303', currentUser.rules)">修改
                      </button>
                      <button class="btn btn-sm btn-primary"
                              data-ng-click="openRuleForm(roleInfo)"
                              ng-if="$root.haveAuth('090305', currentUser.rules)">设置权限
                      </button>
                      <button class="btn btn-sm btn-danger"
                              data-ng-click="delete(roleInfo)"
                              confirm="确定删除角色：{{roleInfo.roleName}}?" confirm-settings="{size: 'sm'}"
                              ng-if="$root.haveAuth('090304', currentUser.rules)"><i
                        class="fa fa-trash-o"></i>&nbsp;删除
                      </button>
                    </td>
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
