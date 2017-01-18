<template>
  <div class="machine-form-bc">
    <form class="form-horizontal" name="machineAddressForm" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>设置机器地址</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">机器地址</label>
            <div class="col-md-3">
              <select ng-model="machineAddress.provinceId" class="form-control" required ng-change="showCityList(machineAddress.provinceId)">
                <option value="{{province.provinceId}}" ng-repeat="province in provinceList"
                        ng-selected="{{province.provinceId == machineAddress.provinceId}}">
                  {{province.name}}
                </option>
              </select>
            </div>
            <div class="col-md-3" ng-show="cityList">
              <select ng-model="machineAddress.cityId" class="form-control" required ng-change="showAreaList(machineAddress.cityId)">
                <option value=""></option>
                <option value="{{city.cityId}}" ng-repeat="city in cityList"
                        ng-selected="{{machineAddress.cityId == city.cityId}}">
                  {{city.name}}
                </option>
              </select>
            </div>
            <div class="col-md-3" ng-show="areaList">
              <select ng-model="machineAddress.areaId" class="form-control" required>
                <option value=""></option>
                <option value="{{area.areaId}}" ng-repeat="area in areaList"
                        ng-selected="{{area.areaId == machineAddress.areaId}}">
                  {{area.name}}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">详细地址</label>
            <div class="col-md-9">
              <input type="text" ng-model="machineAddress.moreDetailInfo" required placeholder="设备详细地址" class="form-control">
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.name">
            <i class="fa fa-warning"></i>{{invalidMessage.name}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="machineAddressForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
