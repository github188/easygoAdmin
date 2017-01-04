<template>
  <div class="row">
    <div class="col-md-12" ng-if="$root.haveAuth('0301', currentUser.rules)">
      <div class="box box-widget">
        <div class="box-header">
          <h3 class="box-title">广告列表</h3>

          <div class="box-tools">
            <button class="btn bg-purple" ng-click="openForm()"
                    ng-if="$root.haveAuth('030102', currentUser.rules)">
              新建广告
            </button>
          </div>
        </div>
        <div us-spinner spinner-key="advertiseTable" ng-if="$root.haveAuth('030101', currentUser.rules)" class="box-body table-responsive no-padding">
          <table class="table table-striped table-hover ">
            <tr>
              <th>ID</th>
              <th>广告名称</th>
              <th>广告类型</th>
              <th>显示时间</th>
              <th>下载链接</th>
              <th>资源大小</th>
              <th>优先级</th>
              <th>操作
                <button class="btn btn-xs btn-default"
                        ng-click="refreshData(true)">刷新
                </button>
              </th>
            </tr>
            <tr ng-repeat="advertiseInfo in advertiseInfos">
              <td>
                {{advertiseInfo.advertisementId}}
              </td>
              <td>
                {{advertiseInfo.advertisementName}}
              </td>
              <td>
                {{advertiseInfo.advertisementType == '1' ? '视频' : '图片'}}
              </td>
              <td>
                {{advertiseInfo.advertisementShowTime}}
              </td>
              <td>
                <abbr title="{{advertiseInfo.advertisementDownloadUrl}}">{{advertiseInfo.advertisementDownloadUrl
                  | characters:30 :true}}</abbr>
              </td>
              <td>
                {{advertiseInfo.advertisementSize | advertiseSize}}
              </td>
              <td>
                {{advertiseInfo.advertisementLevel | advertiseLevel}}
              </td>
              <td>
                <button class="btn bg-purple btn-xs"
                        data-ng-click="openForm(advertiseInfo)"
                        ng-if="$root.haveAuth('030103', currentUser.rules)">修改
                </button>
                <button class="btn btn-danger btn-xs"
                        data-ng-click="delete(advertiseInfo)"
                        confirm-title="确认"
                        confirm-ok="确定"
                        confirm-cancel="取消"
                        confirm="确定删除广告：{{advertiseInfo.advertisementName}}?"
                        confirm-settings="{size: 'sm'}"
                        ng-if="$root.haveAuth('030104', currentUser.rules)">删除
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
