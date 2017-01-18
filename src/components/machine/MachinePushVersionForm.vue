<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" ng-submit="save()">
      <div class="modal-body">
        <fieldset>
          <legend>推送安卓程序版本</legend>
          <div us-spinner spinner-key="versionTable" class="table-responsive">
            <table class="table table-striped table-hover">

              <tr>
                <th>ID</th>
                <th>程序版本</th>
                <th>安卓版本</th>
                <th>控制板类型</th>
                <th>版本描述</th>
                <th>下载链接</th>
                <th>状态</th>
              </tr>
              <tr ng-repeat="versionInfo in versionInfos">
                <td>
                  <input type="checkbox" ng-model="versionInfo.selected">&nbsp;&nbsp;{{versionInfo.versionId}}
                </td>
                <td>
                  {{versionInfo.versionNumber}}
                </td>
                <td>
                  {{versionInfo.versionCode}}
                </td>
                <td>
                  {{versionInfo.controlBoardType | controlBoardType }}
                </td>
                <td>
                  <abbr title="{{versionInfo.versionDesc}}">{{versionInfo.versionDesc | characters:12
                    :true}}</abbr>
                </td>
                <td>
                  <abbr title="{{versionInfo.versionDownloadUrl}}">{{versionInfo.versionDownloadUrl |
                    characters:20 :true}}</abbr>
                </td>
                <td>
                  {{versionInfo.versionStatus?'启用':'禁用'}}
                </td>
              </tr>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" value="推送">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
