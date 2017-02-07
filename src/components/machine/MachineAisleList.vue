<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        货道模板<span v-show="machineAisleTemplateDesc.templateName">
        ({{machineAisleTemplateDesc.templateName}})</span>--->货道设置
        <button class="btn btn-default pull-right" @click="cancel">返回</button>
      </h3>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="machine-aisle-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover ">
          <tbody>
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
                      @click="refreshData">刷新
              </button>
            </th>
          </tr>
          <tr v-for="(machineAisleTemplate, index) in machineAisleTemplates">
            <td>
              {{index+1}}
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
                      @click="openFormAisle(machineAisleTemplate)">修改
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <MachineAisleForm :allFilterBrand="this.brand" :aisleTemplate="this.aisleTemplate" v-on:dismiss="formDismiss" v-if="form"></MachineAisleForm>
  </div>
</template>

<script>
  import axios from 'axios'
  // import MachineAisleTemplateForm from './MachineAisleTemplateForm'
  import MachineAisleForm from './MachineAisleForm'
  export default{
    name: 'MachineAisleList',
    data () {
      return {
        form: false,
        machineAisleTemplateDesc: {},
        machineAisleTemplates: [],
        brand: [],
        aisleTemplate: {}
      }
    },
    components: {
      // MachineAisleTemplateForm
      MachineAisleForm
    },
    watch: {},
    computed: {},
    mounted () {
      let _this = this
      axios.get('http://localhost:9999/aisleDesc/' + _this.$route.query.id).then(function (res) {
        if (res.data) {
          _this.machineAisleTemplateDesc = res.data
        }
      })
      axios.get('http://localhost:9999' + '/aisle?templateId=' + _this.$route.query.id).then(function (res) {
        if (res.data) {
          _this.machineAisleTemplates = res.data
        }
      })
    },
    methods: {
      openFormAisle (machineAisleTemplate) {
        let _this = this
        this.aisleTemplate = machineAisleTemplate
        if (this.form === false) {
          this.form = true
          axios.get('http://localhost:9999/goods/brand').then(function (res) {
            if (res.data) {
              _this.brand = res.data
            }
          })
        } else {
          this.form = false
        }
      },
      formDismiss () {
        this.form = false
        this.refreshData()
      },
      refreshData (e) {
        let _this = this
        axios.get('http://localhost:9999' + '/aisle?templateId=' + _this.$route.query.id).then(function (res) {
          if (res.data) {
            _this.machineAisleTemplates = res.data
          }
        })
      },
      cancel () {
        this.$router.push('/machine/aisle')
      }
    }
  }
</script>

<style lang="scss">
</style>
