<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="advertisement-form-bc" us-spinner spinner-key="advertisement-upload-form">
          <div class="modal-body">
            <legend>{{formTitle}}</legend>
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h6 class="panel-title">上传广告文件</h6>
              </div>
              <div class="panel-body">
                <form class="form-horizontal" @submit.prevent autocomplete="off" enctype="multipart/form-data">
                  <fieldset>
                    <div class="form-group">
                      <label for="inputName" class="col-md-2 control-label">广告文件</label>
                      <div class="col-md-3">
                        <select v-model="advertiseInfo.advertisementType" class="form-control" required>
                          <option value="0">图片</option>
                          <option value="1">视频</option>
                        </select>
                      </div>
                      <div class="col-md-5">
                        <input type="file" file-model="advertiseInfo.advertiseFile" required class="form-control">
                      </div>
                      <div class="col-md-2">
                        <button type="submit" class="btn btn-success">上传</button>
                      </div>
                    </div>
                    <div class="form-group" ng-show="progressValueNow > 0 && progressValueNow <= 100">
                      <div class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
                             aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                          <span class="sr-only">40% Complete (success)</span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <!--<div class="panel panel-primary">-->
            <!--<div class="panel-heading">-->
            <!--<h6 class="panel-title">文件预览</h6>-->
            <!--</div>-->
            <!--<div class="panel-body">-->
            <!--<fieldset>-->
            <!--<label for="input-params" ng-click="showFile = !showFile;" ng-init="showFile = false;">-->
            <!--<i class="fa fa-chevron-circle-right" ng-if="!showFile"></i>-->
            <!--<i class="fa fa-chevron-circle-down" ng-if="showFile"></i>-->
            <!--<span-->
            <!--ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='0'">图片广告</span>-->
            <!--<span-->
            <!--ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='1'">视频广告</span>预览-->
            <!--</label>-->
            <!--<div class="row" ng-if="showFile">-->
            <!--<div class="form-group col-md-12 text-center">-->
            <!--<img width="500" height="350" ng-src="{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}"-->
            <!--ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='0'">-->
            <!--<video width="500" height="350"-->
            <!--ng-show="advertiseInfo.advertisementDownloadUrl && advertiseInfo.advertisementType=='1'"-->
            <!--ng-src="{{trustSrc(advertiseInfo.advertisementDownloadUrl)}}" controls="controls"-->
            <!--type="video/mp4">-->
            <!--</video>-->
            <!--</div>-->
            <!--</div>-->
            <!--</fieldset>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="panel panel-primary">-->
            <!--<div class="panel-heading">-->
            <!--<h6 class="panel-title">广告基本信息</h6>-->
            <!--</div>-->
            <!--<div class="panel-body">-->
            <!--<form class="form-horizontal" ng-submit="save()" name="advertiseForm">-->
            <!--<fieldset>-->
            <!--<div class="form-group">-->
            <!--<label class="col-md-2 control-label">广告名称</label>-->
            <!--<div class="col-md-4">-->
            <!--<input type="text" v-model="advertiseInfo.advertisementName" required class="form-control">-->
            <!--</div>-->
            <!--<label class="col-md-2 control-label">优先级</label>-->
            <!--<div class="col-md-4">-->
            <!--<select v-model="advertiseInfo.advertisementLevel" required class="form-control">-->
            <!--<option value="11">初始广告</option>-->
            <!--<option value="12">默认广告</option>-->
            <!--<option value="13">轮播广告</option>-->
            <!--</select>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group">-->
            <!--<label class="col-md-2 control-label">广告类型</label>-->
            <!--<div class="col-md-4">-->
            <!--<select v-model="advertiseInfo.advertisementType" ng-disabled="true" class="form-control"-->
            <!--required>-->
            <!--<option value="0">图片</option>-->
            <!--<option value="1">视频</option>-->
            <!--</select>-->
            <!--</div>-->
            <!--<label class="col-md-2 control-label" ng-show="advertiseInfo.advertisementType=='0'">显示时间</label>-->
            <!--<div class="col-md-4" ng-show="advertiseInfo.advertisementType=='0'">-->
            <!--<input type="text" v-model="advertiseInfo.advertisementShowTime" class="form-control">-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group">-->
            <!--<label class="col-md-2 control-label">下载链接</label>-->
            <!--<div class="col-md-10">-->
            <!--<input type="text" v-model="advertiseInfo.advertisementDownloadUrl" required ng-disabled="true"-->
            <!--class="form-control">-->
            <!--</div>-->
            <!--<input type="text" v-model="advertiseInfo.advertisementSize" ng-hide="true">-->
            <!--</div>-->
            <!--</fieldset>-->
            <!--<div class="modal-footer">-->
            <!--<a class="btn btn-default" @click="dismiss">关闭</a>-->
            <!--<input type="submit" class="btn btn-submit-bc" ng-disabled="advertiseForm.$invalid" value="保存">-->
            <!--</div>-->
            <!--</form>-->
            <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    props: ['formTitle'],
    data () {
      return {
        advertiseInfo: {}
      }
    },
    mounted () {
    },
    methods: {
      dismiss () {
        this.$emit('dismiss')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
