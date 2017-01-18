<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        安卓版本&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" ng-click="openForm()" ng-if="$root.haveAuth('050202', currentUser.rules)">
          <i class="fa fa-pencil-square-o"></i>&nbsp;新建安卓版本
        </button>
      </h3>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="versionTable" class="table-responsive">
        <table class="table table-striped table-hover ">
          <tr>
            <th>ID</th>
            <th>程序版本号</th>
            <th>安卓版本号</th>
            <th>控制板类型</th>
            <th>版本描述</th>
            <th>下载链接</th>
            <th>操作
              <button class="btn btn-xs btn-default pull-right"
                      ng-click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr ng-repeat="versionInfo in versionInfos">
            <td>
              {{versionInfo.versionId}}
            </td>
            <td>
              {{versionInfo.versionNumber}}
            </td>
            <td>
              {{versionInfo.versionCode}}
            </td>
            <td>
              {{versionInfo.controlBoardType | controlBoardType}}
            </td>
            <td>
              <abbr title="{{versionInfo.versionDesc}}">{{versionInfo.versionDesc}}</abbr>
            </td>
            <td>
              {{versionInfo.versionDownloadUrl}}
            </td>
            <td>
              <button class="btn btn-sm btn-primary"
                      data-ng-click="openForm(versionInfo)"
                      ng-if="$root.haveAuth('050203', currentUser.rules)">修改
              </button>
              <button class="btn btn-sm btn-danger"
                      data-ng-click="updateAll(versionInfo)"
                      ng-if="$root.haveAuth('050204', currentUser.rules)"><i
                class="fa fa-exclamation-triangle"></i>&nbsp;升级所有小于当前版本的机器
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
