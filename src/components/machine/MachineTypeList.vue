<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        设备类型&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click="createForm">
          <i class="fa fa-pencil-square-o"></i>&nbsp;新建类型
        </button>
      </h3>
    </div>
    <div us-spinner spinner-key="machine-type-list-spinner" class="box-body table-responsive">
      <table class="table table-striped table-hover ">
        <tbody>
        <tr>
          <th>ID</th>
          <th>类型名称</th>
          <th>货道行数</th>
          <th>货道列数</th>
          <th>屏幕尺寸</th>
          <th>触屏</th>
          <th>选货按键</th>
          <th>数字键盘</th>
          <th>控制板类型</th>
          <th>操作
            <button class="btn btn-xs btn-default pull-right"
                    @click="refreshData(true)">刷新
            </button>
          </th>
        </tr>
        <tr v-for="machineType in machineTypes">
          <td>
            <input type="checkbox">
          </td>
          <td>
            {{machineType.typeName}}
          </td>
          <td>
            {{machineType.aisleRowNumber}}
          </td>
          <td>
            {{machineType.aisleColumnNumber}}
          </td>
          <td>
            {{machineType.screenSize}}
          </td>
          <td>
            {{machineType.enableTouch=='1' ? '是':'否'}}
          </td>
          <td>
            {{machineType.haveSelectGoodsButton=='1' ? '有':'没有'}}
          </td>
          <td>
            {{machineType.haveNumberKeyboard=='1' ? '有':'没有'}}
          </td>
          <td :data-controlBoardType="machineType.controlBoardType">
            <span v-if="machineType.controlBoardType === 'ZJ'">中吉</span>
            <span v-else-if="machineType.controlBoardType === 'NEG'">新易购</span>
            <span v-else-if="machineType.controlBoardType === 'JY'">金雨</span>
            <span v-else-if="machineType.controlBoardType === 'YC'">易触</span>
            <span v-else-if="machineType.controlBoardType === 'CHZH'">称重</span>
            <span v-else>易购</span>
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="updateForm(machineType)">修改
            </button>
            <button class="btn btn-sm btn-danger" @click="delete(machineType)" confirm-settings="{size: 'sm'}"><i
              class="fa fa-trash-o"></i>&nbsp;删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <MachineTypeForm :formTitle="formTitle" v-on:dismiss="formDismiss" v-if="form"></MachineTypeForm>
  </div>
</template>

<script>
  import axios from 'axios'
  import MachineTypeForm from './MachineTypeForm'
  export default{
    name: 'MachineTypeList',
    data () {
      return {
        form: false,
        machineTypes: [],
        formTitle: ''
      }
    },
    components: {
      MachineTypeForm
    },
    watch: {},
    computed: {},
    mounted () {
      let _this = this
      axios.get('http://localhost:9999/machineType').then(function (res) {
        if (res.data) {
          _this.machineTypes = res.data
        }
      })
    },
    methods: {
      createForm () {
        this.formTitle = '新建设备类型'
        if (this.form === false) {
          this.form = true
        } else {
          this.form = false
        }
      },
      updateForm (machineType) {
        this.formTitle = '修改设备类型'
        if (this.form === false) {
          this.form = true
        } else {
          this.form = false
        }
      },
      formDismiss () {
        this.form = false
      },
      delete (type) {
        // if (confirm('确定删除机器类型：' + this.machineType.typeName + '?')) {
        //   console.log('删掉啦哈哈哈')
        // }
      },
      refreshData (e) {
        let _this = this
        axios.get('http://localhost:9999/machineType').then(function (res) {
          if (res.data) {
            _this.machineTypes = res.data
          }
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
