<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12">
          <h3>
            货道商品<span ng-show="machineBaseInfo.machineName">({{machineBaseInfo.machineName}})</span>
            --->缺货率:{{machineAisleStockInfo.sumOutOfStock/machineAisleStockInfo.sumOfDefaultStock*100 |
            number:2}}%,
            断货率:{{machineAisleStockInfo.runOutOfAisle/machineAisleStockInfo.sumOfAisle*100 | number:2}}%
            <button class="btn btn-default pull-right" ng-click="cancel()">返回</button>
          </h3>

        </div>
      </div>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="machine-aisle-goods-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover">
          <tr>
            <th>序号</th>
            <th>货道编号</th>
            <th>商品品牌</th>
            <th>商品名称</th>
            <th>商品规格</th>
            <th>成本价格</th>
            <th>销售价格</th>
            <th>是否销售</th>
            <th>库存数量</th>
            <th>默认库存</th>
            <th ng-if="$root.haveAuth('010312', currentUser.rules)">操作
              <button class="btn btn-xs btn-default pull-right"
                      ng-click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr ng-repeat="machineAisleInfo in machineAisleInfos">
            <td>
              {{$index+1}}
            </td>
            <td>
              {{machineAisleInfo.aisleName}}
            </td>
            <td>
              {{machineAisleInfo.goodsSkuInfo.skuPackageType}}
            </td>
            <td>
              {{machineAisleInfo.goodsSkuInfo.skuSubject}}
            </td>
            <td>
              {{machineAisleInfo.goodsSkuInfo.skuSize}}
            </td>
            <td>
              {{machineAisleInfo.aisleOriginalPrice | currency:"￥"}}
            </td>
            <td>
              {{machineAisleInfo.aisleGoodsPrice | currency:"￥"}}
            </td>
            <td>
              {{machineAisleInfo.isSaleEnabled == 'Y' ? '是' : '否'}}
            </td>
            <td ng-class="{danger:machineAisleInfo.goodsStock<3}">
              {{machineAisleInfo.goodsStock | fullOrEmpty}}
            </td>
            <td>
              {{machineAisleInfo.defaultGoodsStock | fullOrEmpty}}
            </td>
            <td ng-if="$root.haveAuth('010312', currentUser.rules)">
              <button class="btn btn-sm btn-primary"
                      data-ng-click="openFormAisle(machineAisleInfo)">修改
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>

</style>
