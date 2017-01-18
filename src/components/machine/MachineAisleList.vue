<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12">
          <h3>
            货道模板<span ng-show="machineAisleTemplateDesc.templateName">({{machineAisleTemplateDesc.templateName}})</span>--->货道设置
            <button class="btn btn-default pull-right" ng-click="cancel()">返回</button>
          </h3>

        </div>
      </div>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="machine-aisle-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover ">
          <tr>
            <th>序号</th>
            <th>货道编号</th>
            <th>商品品牌</th>
            <th>商品名称</th>
            <th>商品规格</th>
            <th>商品价格(分)</th>
            <th>默认库存</th>
            <th>操作
              <button class="btn btn-xs btn-default pull-right"
                      ng-click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr ng-repeat="machineAisleTemplate in machineAisleTemplates">
            <td>
              {{$index+1}}
            </td>
            <td>
              {{machineAisleTemplate.aisleName}}
            </td>
            <td>
              {{machineAisleTemplate.goodsSkuInfo.skuPackageType}}
            </td>
            <td>
              {{machineAisleTemplate.goodsSkuInfo.skuSubject}}
            </td>
            <td>
              {{machineAisleTemplate.goodsSkuInfo.skuSize}}
            </td>
            <td>
              {{machineAisleTemplate.aisleGoodsPrice}}
            </td>
            <td>
              {{machineAisleTemplate.defaultGoodsStock}}
            </td>
            <td>
              <button class="btn btn-sm btn-primary"
                      data-ng-click="openFormAisle(machineAisleTemplate)">修改
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
