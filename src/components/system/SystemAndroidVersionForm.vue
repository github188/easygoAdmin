<template>
  <div class="android-version-form-bc" us-spinner spinner-key="version-upload-form">
    <div class="modal-body">
      <legend>{{formTitle}}</legend>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">上传安卓版本文件</h6>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" ng-submit="upload()" enctype="multipart/form-data">
            <fieldset>
              <div class="form-group">
                <label for="inputName" class="col-md-3 control-label">版本文件</label>

                <div class="col-md-4">
                  <input type="file" file-model="versionInfo.versionFile" required class="form-control">
                </div>
                <div class="col-md-5">
                  <button type="submit" class="btn btn-success">上传</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">安卓版本基本信息</h6>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" ng-submit="save()">
            <fieldset>
              <div class="form-group">
                <label class="col-md-3 control-label">程序版本号</label>

                <div class="col-md-3">
                  <input type="text" ng-model="versionInfo.versionNumber" required class="form-control">
                </div>
                <label class="col-md-3 control-label">安卓版本号</label>

                <div class="col-md-3">
                  <input type="text" ng-model="versionInfo.versionCode" required class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">版本状态</label>

                <div class="col-md-3">
                  <select ng-model="versionInfo.versionStatus" class="form-control">
                    <option value="0">禁用</option>
                    <option value="1">启用</option>
                    <option value="6">发布</option>
                  </select>
                </div>
                <label class="col-md-3 control-label">控制板类型</label>

                <div class="col-md-3">
                  <select ng-model="versionInfo.controlBoardType" required class="form-control">
                    <option value="EG">易购</option>
                    <option value="ZJ">中吉</option>
                    <option value="NEG">新易购</option>
                    <option value="YC">易触</option>
                    <option value="JY">金雨</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">下载链接</label>

                <div class="col-md-9">
                  <input type="text" ng-model="versionInfo.versionDownloadUrl" required
                         class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">版本描述</label>

                <div class="col-md-9">
                  <input type="text" ng-model="versionInfo.versionDesc" required class="form-control">
                </div>
              </div>
            </fieldset>
            <div class="modal-footer">
              <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
              <input type="submit" class="btn btn-submit-bc" value="保存">
            </div>
          </form>
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
