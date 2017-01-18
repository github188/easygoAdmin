<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="machineTypeForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">类型名称</label>
            <div class="col-md-4">
              <input type="text" ng-model="machineType.typeName" required placeholder="输入唯一的类型名称" class="form-control">
            </div>
            <label class="col-md-2 control-label">屏幕尺寸</label>
            <div class="col-md-4">
              <input type="number" ng-model="machineType.screenSize" required placeholder="例如32、7等" ng-pattern="/^[1-9]d*/" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">货道行数</label>
            <div class="col-md-4">
              <input type="number" ng-model="machineType.aisleRowNumber" required placeholder="例如6行等" ng-pattern="/^[1-9]d*/" class="form-control">
            </div>
            <label class="col-md-2 control-label">货道列数</label>
            <div class="col-md-4">
              <input type="number" ng-model="machineType.aisleColumnNumber" required placeholder="例如6列等" ng-pattern="/^[1-9]d*/" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">触屏</label>
            <div class="col-md-4">
              <select ng-model="machineType.enableTouch" required class="form-control">
                <option value="0">否</option>
                <option value="1">是</option>
              </select>
            </div>
            <label class="col-md-2 control-label">选货按键</label>
            <div class="col-md-4">
              <select ng-model="machineType.haveSelectGoodsButton" required class="form-control">
                <option value="0">没有</option>
                <option value="1">有</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">数字键盘</label>
            <div class="col-md-4">
              <select ng-model="machineType.haveNumberKeyboard" required class="form-control">
                <option value="0">没有</option>
                <option value="1">有</option>
              </select>
            </div>
            <label class="col-md-2 control-label">控制板</label>
            <div class="col-md-4">
              <select ng-model="machineType.controlBoardType" required class="form-control">
                <option value="EG">易购</option>
                <option value="ZJ">中吉</option>
                <option value="NEG">新易购</option>
                <option value="YC">易触</option>
                <option value="JY">金雨</option>
              </select>
            </div>
          </div>
          <div class="alert alert-danger" ng-show="invalidMessage.name">
            <i class="fa fa-warning"></i>{{invalidMessage.name}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="machineTypeForm.$invalid" value="保存">
      </div>
    </form>
  </div>


</template>

<script>

</script>


<style lang="scss" scoped>

</style>
