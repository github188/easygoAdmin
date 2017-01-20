<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="machine-type-form-bc">
          <form class="form-horizontal" @submit.prevent autocomplete="off" name="aisleTempalteDescForm" novalidate>
            <div class="modal-body">
              <fieldset>
                <legend>{{formTitle}}</legend>
                <div class="form-group">
                  <label class="col-md-2 control-label">模板名称</label>
                  <div class="col-md-4">
                    <input type="text" v-model="aisleTemplateDesc.templateName" required placeholder="输入唯一的模板名称"
                           class="form-control">
                  </div>
                  <label class="col-md-2 control-label">机器类型</label>
                  <div class="col-md-4">
                    <select v-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required
                            v-if="formTitle === '新建货道模板'">
                      <option :value="machineType.machineTypeId" v-for="machineType in machineTypes">
                        {{machineType.typeName}}
                      </option>
                    </select>
                    <select v-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required
                            v-if="formTitle === '修改货道模板'" disabled="true">
                      <option :value="machineType.machineTypeId" v-for="machineType in machineTypes">
                        {{machineType.typeName}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">应用场景</label>
                  <div class="col-md-10">
                    <input type="text" v-model="aisleTemplateDesc.applySceneDesc" required placeholder="输入应用场景描述"
                           class="form-control">
                  </div>
                </div>
                <div class="alert alert-danger" v-show="invalidMessage.name">
                  <i class="fa fa-warning"></i>{{invalidMessage.name}}
                </div>
              </fieldset>
            </div>
            <div class="modal-footer">
              <a class="btn btn-default" @click="dismiss">关闭</a>
              <input type="submit" class="btn btn-submit-bc" @click="save" :disabled='savebtnDisabled' value="保存">
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
    name: 'MachineAisleTemplateFrom',
    props: ['formTitle'],
    data () {
      return {
        machineTypes: {},
        aisleTemplateDesc: {
          templateName: '',
          machineTypeInfo: {
            machineTypeId: ''
          },
          applySceneDesc: ''
        },
        invalidMessage: {},
        aisleTempalteDescForm: {},
        savebtnDisabled: true
      }
    },
    components: {},
    watch: {
      // 监听用户输入
      'aisleTemplateDesc.templateName' (val) {
        if (val === '') {
          this.aisleTempalteDescForm.templateName = true // 禁用
        } else {
          this.aisleTempalteDescForm.templateName = false // 开启
        }
        // 监听完成使用函数验证是否开启save禁用
        this.savebtn()
      },
      'aisleTemplateDesc.machineTypeInfo.machineTypeId' (val) {
        if (val === '') {
          this.aisleTempalteDescForm.machineTypeId = true // 禁用
        } else {
          this.aisleTempalteDescForm.machineTypeId = false // 开启
        }
        this.savebtn()
      },
      'aisleTemplateDesc.applySceneDesc' (val) {
        if (val === '') {
          this.aisleTempalteDescForm.applySceneDesc = true // 禁用
        } else {
          this.aisleTempalteDescForm.applySceneDesc = false // 开启
        }
        this.savebtn()
      }
    },
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
      // 关闭
      dismiss () {
        this.$emit('dismiss')
      },
      save () {
        console.log(this.machineType.typeName)
      },
      // 失去焦点验证正整数正则 帮助用户修正输入
      screenSizeInt () {
        this.machineType.screenSize = this.int(this.machineType.screenSize)
      },
      aisleRowNumberInt () {
        this.machineType.aisleRowNumber = this.int(this.machineType.aisleRowNumber)
      },
      aisleColumnNumberInt () {
        this.machineType.aisleColumnNumber = this.int(this.machineType.aisleColumnNumber)
      },
      int (num) {
        let re = /^[1-9]\d*/
        if (re.test(num)) {
          let arr = re.exec(num)
          return arr[0]
        }
      },
      savebtn () {
        if (this.aisleTempalteDescForm.templateName === false &&
          this.aisleTempalteDescForm.machineTypeId === false &&
          this.aisleTempalteDescForm.applySceneDesc === false) {
          this.savebtnDisabled = false   // 通过
        } else {
          this.savebtnDisabled = true
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
