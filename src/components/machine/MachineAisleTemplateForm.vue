<template>
  <div class="machine-type-form-bc">
    <form class="form-horizontal" ng-submit="save()" name="aisleTempalteDescForm" novalidate>
      <div class="modal-body">
        <fieldset>
          <legend>{{formTitle}}</legend>
          <div class="form-group">
            <label class="col-md-2 control-label">模板名称</label>
            <div class="col-md-4">
              <input type="text" v-model="aisleTemplateDesc.templateName" required placeholder="输入唯一的模板名称" class="form-control">
            </div>
            <label class="col-md-2 control-label">机器类型</label>
            <div class="col-md-4">
              <select ng-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required ng-if="!isEdit">
                <option value="{{machineType.machineTypeId}}" ng-repeat="machineType in machineTypeList"
                        ng-selected="{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}">{{machineType.typeName}}</option>
              </select>
              <select ng-model="aisleTemplateDesc.machineTypeInfo.machineTypeId" class="form-control" required ng-if="isEdit" ng-disabled="true">
                <option value="{{machineType.machineTypeId}}" ng-repeat="machineType in machineTypeList"
                        ng-selected="{{machineType.machineTypeId == aisleTemplateDesc.machineTypeInfo.machineTypeId}}">{{machineType.typeName}}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-2 control-label">应用场景</label>
            <div class="col-md-10">
              <input type="text" v-model="aisleTemplateDesc.applySceneDesc" required placeholder="输入应用场景描述" class="form-control">
            </div>
          </div>
          <div class="alert alert-danger" v-show="invalidMessage.name">
            <i class="fa fa-warning"></i>{{invalidMessage.name}}
          </div>
        </fieldset>
      </div>
      <div class="modal-footer">
        <a href="" class="btn btn-default" @click="dismiss">关闭</a>
        <input type="submit" class="btn btn-submit-bc" @click="save" :disabled='savebtnDisabled' value="保存">
      </div>
    </form>
  </div>
</template>
<script>
  export default{
    name: 'MachineTypeFrom',
    data () {
      return {
        formTitle: '新增设备类型',
        machineType: {
          typeName: '',
          screenSize: '',
          aisleRowNumber: '',
          aisleColumnNumber: '',
          enableTouch: '',
          haveSelectGoodsButton: '',
          haveNumberKeyboard: '',
          controlBoardType: ''
        },
        invalidMessage: {},
        aisleTempalteDescForm: {},
        savebtnDisabled: true
      }
    },
    components: {},
    watch: {
      // 监听用户输入
      'machineType.typeName' (val) {
        if (val === '') {
          this.machineTypeForm.typeName = true // 禁用
        } else {
          this.machineTypeForm.typeName = false // 开启
        }
        this.savebtn()
      }
    },
    computed: {},
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
        if (this.machineTypeForm.typeName === false &&
          this.machineTypeForm.screenSize === false &&
          this.machineTypeForm.aisleRowNumber === false &&
          this.machineTypeForm.aisleColumnNumber === false &&
          this.machineTypeForm.enableTouch === false &&
          this.machineTypeForm.haveSelectGoodsButton === false &&
          this.machineTypeForm.haveNumberKeyboard === false &&
          this.machineTypeForm.controlBoardType === false) {
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
