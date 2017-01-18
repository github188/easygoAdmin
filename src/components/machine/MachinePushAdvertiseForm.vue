<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" ng-submit="save()" ng-disabled="pushForm.$invalid" >
      <div class="modal-body">
        <fieldset>
          <legend>推送广告</legend>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h6 class="panel-title">设置广告播放时间</h6>
            </div>
            <div class="panel-body">
              <fieldset>
                <div class="form-group">
                  <label for="inputName" class="col-md-3 control-label">开始播放日期</label>
                  <div class="col-md-3">
                    <p class="input-group">
                      <input ng-readonly="true" class="form-control" show-weeks="false" is-open="status.startOpen" datepicker-popup="yyyy-MM-dd"
                             ng-model="advertiseSend.advertisementStartDay" required="true"/>
                      <span class="input-group-btn">
										        <button type="button" class="btn btn-default" ng-click="startOpen()"><i class="glyphicon glyphicon-calendar"></i></button>
										    </span>
                    </p>
                  </div>
                  <label for="inputName" class="col-md-3 control-label">结束播放日期</label>
                  <div class="col-md-3">
                    <p class="input-group">
                      <input ng-readonly="true" class="form-control" show-weeks="false" is-open="status.endOpen" datepicker-popup="yyyy-MM-dd"
                             ng-model="advertiseSend.advertisementEndDay" required="true"/>
                      <span class="input-group-btn">
										        <button type="button" class="btn btn-default" ng-click="endOpen()"><i class="glyphicon glyphicon-calendar"></i></button>
										    </span>
                    </p>
                  </div>
                </div>
                <div class="form-group ">
                  <label for="inputName" style="margin-top: 33px" class="col-md-3 control-label center-block">开始播放时间</label>
                  <div class="col-md-3">
                    <timepicker ng-model="advertiseSend.advertisementStartTime" required show-spinners="true" readonly-input="true" show-meridian="false"></timepicker>
                  </div>
                  <label for="inputName" style="margin-top: 33px" class="col-md-3  control-label center-block">结束播放时间</label>
                  <div class="col-md-3">
                    <timepicker ng-model="advertiseSend.advertisementEndTime" required show-spinners="true" readonly-input="true" show-meridian="false"></timepicker>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div us-spinner spinner-key="advertiseTable" class="table-responsive">
            <table class="table table-striped table-hover">
              <tr>
                <th>ID</th>
                <th>广告名称</th>
                <th>广告类型</th>
                <th>优先级</th>
                <th>下载链接</th>
              </tr>
              <tr ng-repeat="advertiseInfo in advertiseInfos">
                <td>
                  <input type="checkbox" ng-model="advertiseInfo.selected">&nbsp;&nbsp;{{advertiseInfo.advertisementId}}
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
                  <abbr title="{{advertiseInfo.advertisementDownloadUrl}}">{{advertiseInfo.advertisementDownloadUrl | characters:20 :true}}</abbr>
                </td>
              </tr>
              </tbody>
            </table>
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
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="pushForm.$invalid" value="推送">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
