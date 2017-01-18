<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" name="aisleTempalteForm" ng-submit="save()" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">货道编号</label>
            <div class="col-md-4">
              <input type="text" ng-model="aisleTemplate.aisleName" ng-disabled="true" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">商品名称</label>
            <div class="col-md-10">
              <span class="form-control">{{aisleTemplate.goodsSkuInfo.skuPackageType}}{{aisleTemplate.goodsSkuInfo.skuSubject}}{{aisleTemplate.goodsSkuInfo.skuSize}}</span>
              <!-- <input type="text" ng-model="aisleTemplate.goodsSkuInfo.skuSubject" ng-disabled="true" required class="form-control"> -->
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
              <select ng-model="aisleTemplate.goodsSkuInfo.skuId" class="form-control" ng-change="showGoods(aisleTemplate.goodsSkuInfo.skuId)">
                <option value="{{goodsItem.skuId}}" ng-repeat="goodsItem in allFilterGoods">
                  {{goodsItem.skuSize}}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">商品价(分)</label>
            <div class="col-md-4">
              <input type="number" ng-model="aisleTemplate.aisleGoodsPrice" required placeholder="仅为数字，单位为分"
                     ng-pattern="/^[1-9]d*|0$/" class="form-control">
            </div>
            <label class="col-md-2 control-label">默认库存</label>
            <div class="col-md-4">
              <input type="number" ng-model="aisleTemplate.defaultGoodsStock" required class="form-control" ng-pattern="/^[1-9]d*|0$/">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" ng-click="dismiss()">关闭</a>
        <input type="submit" class="btn btn-submit-bc" ng-disabled="aisleTempalteForm.$invalid" value="保存">
      </div>
    </form>
  </div>

</template>

<script>

</script>


<style lang="scss" scoped>

</style>
