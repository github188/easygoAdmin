<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        货道模板&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click="createForm">
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
              <router-link :to="{ path: '/machine/aisleList', query: { id: machineAisleTemplateDesc.goodsAisleTemplateId }}">
                <button class="btn btn-sm btn-primary">设置货道
                </button>
              </router-link>
              <button class="btn btn-sm btn-primary" @click="updateForm(machineAisleTemplateDesc)">修改
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <MachineAisleTemplateForm :formTitle="formTitle" v-on:dismiss="formDismiss" v-if="form"></MachineAisleTemplateForm>
  </div>
</template>


<script>
  import axios from 'axios'
  import MachineAisleTemplateForm from './MachineAisleTemplateForm'
  // import MachineAisleList from './MachineAisleList'
  export default{
    name: 'MachineTypeList',
    data () {
      return {
        form: false,
        machineAisleTemplateDescs: []
      }
    },
    components: {
      MachineAisleTemplateForm
      // MachineAisleList
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
      createForm () {
        this.formTitle = '新建货道模板'
        if (this.form === false) {
          this.form = true
        } else {
          this.form = false
        }
      },
      updateForm (machineAisleTemplateDesc) {
        this.formTitle = '修改货道模板'
        if (this.form === false) {
          this.form = true
        } else {
          this.form = false
        }
      },
      formDismiss () {
        this.form = false
      },
      refreshData (e) {
        let _this = this
        axios.get('http://localhost:9999/aisleDesc').then(function (res) {
          if (res.data) {
            _this.machineAisleTemplateDescs = res.data
          }
        })
      }
      // setAisle (machineAisleTemplateDesc) {
      //   this.$router.push('/machine/sysPay')
      // }
    }
  }
</script>

<style lang="scss">
</style>
