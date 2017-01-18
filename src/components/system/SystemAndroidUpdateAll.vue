<template>
  <div class="android-version-form-bc" us-spinner spinner-key="version-upload-form">
    <div class="modal-body">
      <legend>{{formTitle}}</legend>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">待升级安卓版本信息</h6>
        </div>
        <div class="panel-body">
          <form class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label class="col-md-3 control-label">程序版本号:</label>
                <div class="col-md-3">
                  <p class="form-control-static">{{versionInfo.versionNumber}}</p>
                </div>
                <label class="col-md-3 control-label">安卓版本号:</label>
                <div class="col-md-3">
                  <p class="form-control-static">{{versionInfo.versionCode}}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">版本描述:</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{versionInfo.versionDesc}}</p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">待升级版本的机器情况</h6>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" ng-submit="update()">
            <fieldset>
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" ng-model="selected.name" value="all">
                    一共需要升级{{needUpdate.machines.length}}台机器(升级所有)
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" ng-model="selected.name" value="online">
                    其中在线有{{needUpdate.onlineMachines.length}}台机器(升级在线)
                  </label>
                </div>
              </div>
            </fieldset>
            <div class="modal-footer">
              <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
              <input type="submit" class="btn btn-submit-bc" value="升级">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
