<template>
  <div class="row">
    <div class="col-md-12" ng-if="$root.haveAuth('0302', currentUser.rules)">
      <div class="box box-widget">
        <div class="box-header">
          <h3 class="box-title">已推送广告</h3>
          <div class="box-tools">
            <form class="form-inline" novalidate>
              <div class="form-group" style="margin: 0 10px;">
                <label class="control-label">设备编号:</label>
                <input type="text" ng-model="searchInfo.machineCode" class="form-control"
                       placeholder="机器编号"/>
              </div>
              <div class="form-group" style="margin: 0 10px;">
                <button type="button" ng-click="search()"
                        class="btn btn-success"><i class="fa fa-search"></i>查询
                </button>
              </div>
            </form>
          </div>
        </div>
        <div us-spinner spinner-key="advertisePushTable" class="box-body table-responsive no-padding">
          <table class="table table-striped table-hover">
            <tr>
              <th>设备编号</th>
              <th>设备名称</th>
              <th>广告名称</th>
              <th>广告类型</th>
              <th>优先级</th>
              <th>推送日期</th>
              <th>开始日期</th>
              <th>结束日期</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>操作</th>
            </tr>
            <tr ng-repeat="advertiseInfo in advertiseInfos">
              <td>
                {{advertiseInfo.machineCode}}
              </td>
              <td>
                {{advertiseInfo.machineName}}
              </td>
              <td>
                {{advertiseInfo.advertisementName}}
              </td>
              <td>
                {{advertiseInfo.advertisementType == '1' ? '视频' : '图片'}}
              </td>
              <td>
                {{advertiseInfo.advertisementLevel | advertiseLevel}}
              </td>
              <td>
                {{advertiseInfo.gmtCreated | date : 'yyyy-MM-dd'}}
              </td>
              <td>
                {{advertiseInfo.advertisementStartDay}}
              </td>
              <td>
                {{advertiseInfo.advertisementEndDay}}
              </td>
              <td>
                {{advertiseInfo.advertisementStartTime}}
              </td>
              <td>
                {{advertiseInfo.advertisementEndTime}}
              </td>
              <td>
                <button class="btn btn-xs bg-purple"
                        data-ng-click="openForm(advertiseInfo)"
                        ng-if="$root.haveAuth('030201', currentUser.rules)">预览
                </button>
                <button class="btn btn-xs btn-danger"
                        data-ng-click="delete(advertiseInfo)"
                        confirm-title="确认"
                        confirm-ok="确定"
                        confirm-cancel="取消"
                        confirm="确定删除已推送到【{{advertiseInfo.machineCode}}】机器的广告：【{{advertiseInfo.advertisementName}}】?"
                        confirm-settings="{size: 'md'}"
                        ng-if="$root.haveAuth('030202', currentUser.rules)">删除
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="row text-center">
          <pagination class="pagination-sm" boundary-links="true"
                      max-size="6"
                      items-per-page="itemsPerPage"
                      total-items="pageFinishPush.totalSize"
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

</script>


<style lang="scss" scoped>

</style>
