<template>
  <div class="advertisement-form-bc" us-spinner
       spinner-key="advertisement-upload-form">
    <div class="modal-body">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h6 class="panel-title">文件预览</h6>
        </div>
        <div class="panel-body">
          <form action="">
            <fieldset>
              <label for="input-params"> <span
                ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='0'">图片广告</span>
                <span
                  ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='1'">视频广告</span>预览
              </label>
              <div class="row">
                <div class="form-group col-md-12 text-center">
                  <img width="500" height="350"
                       ng-src="{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}"
                       ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='0'">
                  <video width="500" height="350"
                         ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='1'"
                         ng-src="{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}"
                         controls="controls" type="video/mp4">
                  </video>
                </div>
              </div>
            </fieldset>
            <div class="modal-footer">
              <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
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
