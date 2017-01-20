<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        货道模板&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click="openForm()">
          <i class="fa  fa-pencil-square-o"></i>&nbsp;新建模板
        </button>
      </h3>
    </div>
    <div class="col-md-12 bs-component">
      <div us-spinner spinner-key="machine-template-aisle-list-spinner" class="table-responsive">
        <table class="table table-striped table-hover">
          <tbody>
          <tr>
            <th>ID</th>
            <th>模板名称</th>
            <th>机型名称</th>
            <th>应用场景描述</th>
            <th>操作
              <button class="btn btn-xs btn-default pull-right"
                      @click="refreshData(true)">刷新
              </button>
            </th>
          </tr>
          <tr v-for="(machineAisleTemplateDesc, index) in machineAisleTemplateDescs">
            <td>
              {{index+1}}
            </td>
            <td>
              {{machineAisleTemplateDesc.templateName}}
            </td>
            <td>
              {{machineAisleTemplateDesc.machineTypeInfo.typeName}}
            </td>
            <td>
              {{machineAisleTemplateDesc.applySceneDesc}}
            </td>
            <td>
              <button class="btn btn-sm btn-primary" @click="setAisle(machineAisleTemplateDesc)">设置货道
              </button>
              <button class="btn btn-sm btn-primary" @click="openForm(machineAisleTemplateDesc)">修改
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--<MachineAisleTemplateForm v-on:dismiss="formDismiss" v-if="form"></MachineAisleTemplateForm>-->
  </div>
</template>


<script>
  import axios from 'axios'
  // import MachineAisleTemplateForm from './MachineAisleTemplateForm'
  export default{
    name: 'MachineTypeList',
    data () {
      return {
        form: false,
        machineAisleTemplateDescs: []
      }
    },
    components: {
      // MachineAisleTemplateForm
    },
    watch: {},
    computed: {},
    mounted () {
      let _this = this
      axios.get('http://localhost:9999/aisleDesc').then(function (res) {
        if (res.data) {
          _this.machineAisleTemplateDescs = res.data
        }
      })
    },
    methods: {
      openForm (desc) {
        if (this.form === false) {
          this.form = true
        } else {
          this.form = false
        }
      },
      formDismiss () {
        this.form = false
      },
      delete (desc) {
        // if (confirm('确定删除机器类型：' + this.machineType.typeName + '?')) {
        //   console.log('删掉啦哈哈哈')
        // }
      },
      refreshData (e) {
        let _this = this
        axios.get('http://localhost:9999/aisleDesc').then(function (res) {
          if (res.data) {
            _this.machineAisleTemplateDescs = res.data
          }
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
