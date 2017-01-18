<template>
  <div class="machine-aisle-goods-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="aisleGoodsForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">货道编号</label>
            <div class="col-md-4">
              <input type="text" ng-model="machineAisleInfo.aisleName" ng-disabled="true" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">商品名称</label>
            <div class="col-md-10">
              <span class="form-control">{{machineAisleInfo.goodsSkuInfo.skuPackageType}}{{machineAisleInfo.goodsSkuInfo.skuSubject}}{{machineAisleInfo.goodsSkuInfo.skuSize}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">商品选择</label>
            <div class="col-md-3">
              <select ng-model="goods.skuPackageType" class="form-control" ng-change="getAllFilterSubject(goods.skuPackageType)">
                <option value="{{skuBrand}}" ng-repeat="skuBrand in allFilterBrand">
                  {{skuBrand}}
                </option>
              </select>
            </div>
            <div class="col-md-3" ng-show="allFilterSubject">
              <select ng-model="goods.skuSubject" class="form-control" ng-change="getAllFilterGoods(goods.skuPackageType, goods.skuSubject)">
                <option value="{{skuSubject}}" ng-repeat="skuSubject in allFilterSubject">
                  {{skuSubject}}
                </option>
              </select>
            </div>
            <div class="col-md-3" ng-show="allFilterGoods">
              <select ng-model="machineAisleInfo.goodsSkuInfo.skuId" class="form-control" ng-change="showGoods(machineAisleInfo.goodsSkuInfo.skuId)">
                <option value="{{goodsItem.skuId}}" ng-repeat="goodsItem in allFilterGoods">
                  {{goodsItem.skuSize}}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">销售价(元)</label>
            <div class="col-md-4">
              <input type="text" ng-model="machineAisleInfo.aisleGoodsPrice" required placeholder="仅为数字和小数" ng-pattern="/^[0-9]+(.[0-9]{1,2})?$/" class="form-control">
            </div>
            <label class="col-md-2 control-label">是否销售</label>
            <div class="col-md-4">
              <select ng-model="machineAisleInfo.isSaleEnabled" class="form-control" required>
                <option value="N">否</option>
                <option value="Y">是</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">成本价(元)</label>
            <div class="col-md-4">
              <input type="text" ng-model="machineAisleInfo.aisleOriginalPrice" required placeholder="仅为数字和小数" ng-pattern="/^[0-9]+(.[0-9]{1,2})?$/" class="form-control">
            </div>
            <label class="col-md-2 control-label">默认库存</label>
            <div class="col-md-4">
              <input type="number" ng-model="machineAisleInfo.defaultGoodsStock" required class="form-control" ng-disabled="true">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="aisleGoodsForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
