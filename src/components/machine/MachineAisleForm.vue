<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="machine-type-form-bc">
          <form class="form-horizontal" name="aisleTempalteForm" @submit.prevent autocomplete="off" novalidate>
            <div class="modal-body">
              <fieldset>
                <legend>{{formTitle}}</legend>
                <div class="form-group">
                  <label class="col-md-2 control-label">货道编号</label>
                  <div class="col-md-4">
                    <input type="text" v-model="aisleTemplate.aisleName" disabled="true" class="form-control">
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
                    <select v-model="goods.skuPackageType" class="form-control">
                      <option :value="skuBrand" v-for="skuBrand in allFilterBrand">
                        {{skuBrand}}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3" v-show="show.subject">
                    <select v-model="goods.skuSubject" class="form-control">
                      <option :value="skuSubject" v-for="skuSubject in allFilterSubject">
                        {{skuSubject}}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3" v-show="show.size">
                    <select v-model="aisleTemplate.goodsSkuInfo.skuId" class="form-control">
                      <option :value="goodsItem.skuId" v-for="goodsItem in allFilterGoods">
                        {{goodsItem.skuSize}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">商品价(分)</label>
                  <div class="col-md-4">
                    <input type="number" v-model="aisleTemplate.aisleGoodsPrice" required placeholder="仅为数字，单位为分" class="form-control">
                  </div>
                  <label class="col-md-2 control-label">默认库存</label>
                  <div class="col-md-4">
                    <input type="number" v-model="aisleTemplate.defaultGoodsStock" required class="form-control">
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="modal-footer">
              <a class="btn btn-default" @click="dismiss()">关闭</a>
              <input type="submit" class="btn btn-submit-bc" :disabled='savebtnDisabled' @click="save"
                     value="保存">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name: 'MachineAisleFrom',
    props: ['allFilterBrand', 'aisleTemplate'],
    data () {
      return {
        formTitle: '修改货道',
        savebtnDisabled: false,
        goods: {
          skuPackageType: '',
          skuSubject: ''
        },
        subject: [],
        size: [],
        show: {
          subject: false,
          size: false
        },
        machineAisleFrom: {}
      }
    },
    components: {},
    watch: {
      'goods.skuPackageType' (val) {
        let _this = this
        if (val) {
          this.size = []
          this.show.size = false
          axios.get('http://localhost:9999/goods/subject?skuBrand=' + val).then(function (res) {
            if (res.data) {
              _this.subject = res.data
              _this.show.subject = true
            }
          })
        }
      },
      'goods.skuSubject' (val) {
        let _this = this
        if (val) {
          axios.get('http://localhost:9999/goods/size?skuBrand=' + _this.goods.skuPackageType + '&skuSubject=' + val).then(function (res) {
            if (res.data) {
              _this.size = res.data
              _this.show.size = true
            }
          })
        }
      },
      'aisleTemplate.aisleGoodsPrice' (val) {
        if (val && this.int(val)) {
          this.machineAisleFrom.aisleGoodsPrice = false
        } else {
          this.machineAisleFrom.aisleGoodsPrice = true
        }
        this.savebtn()
      },
      'aisleTemplate.defaultGoodsStock' (val) {
        if (val && this.int(val)) {
          this.machineAisleFrom.defaultGoodsStock = false
        } else {
          this.machineAisleFrom.defaultGoodsStock = true
        }
        this.savebtn()
      }
    },
    computed: {
      allFilterSubject () {
        return this.subject
      },
      allFilterGoods () {
        return this.size
      }
    },
    mounted () {
    },
    methods: {
      // 关闭
      dismiss () {
        this.$emit('dismiss')
      },
      save () {
        console.log(this.machineType.typeName)
      },
      int (num) {
        let re = /^[1-9]d*|0$/
        return re.test(num)
      },
      savebtn () {
        if (this.machineAisleFrom.aisleGoodsPrice === false &&
          this.machineAisleFrom.defaultGoodsStock === false) {
          this.savebtnDisabled = false   // 通过
        } else {
          this.savebtnDisabled = true
        }
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>
