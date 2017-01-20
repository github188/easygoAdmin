<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="machine-type-form-bc">
          <form class="form-horizontal" @submit.prevent autocomplete="off" name="machineTypeForm" novalidate>
            <div class="modal-body">
              <fieldset>
                <legend>{{formTitle}}</legend>
                <div class="form-group">
                  <label class="col-md-2 control-label">类型名称</label>
                  <div class="col-md-4">
                    <input type="text" v-model="machineType.typeName" required placeholder="输入唯一的类型名称"
                           class="form-control">
                  </div>
                  <label class="col-md-2 control-label">屏幕尺寸</label>
                  <div class="col-md-4">
                    <input type="number" v-model="machineType.screenSize" required placeholder="例如32、7等"
                           @blur='screenSizeInt' class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">货道行数</label>
                  <div class="col-md-4">
                    <input type="number" v-model="machineType.aisleRowNumber" required placeholder="例如6行等"
                           @blur='aisleRowNumberInt' class="form-control">
                  </div>
                  <label class="col-md-2 control-label">货道列数</label>
                  <div class="col-md-4">
                    <input type="number" v-model="machineType.aisleColumnNumber" required placeholder="例如6列等"
                           @blur='aisleColumnNumberInt' class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">触屏</label>
                  <div class="col-md-4">
                    <select v-model="machineType.enableTouch" required class="form-control">
                      <option value="0">否</option>
                      <option value="1">是</option>
                    </select>
                  </div>
                  <label class="col-md-2 control-label">选货按键</label>
                  <div class="col-md-4">
                    <select v-model="machineType.haveSelectGoodsButton" required class="form-control">
                      <option value="0">没有</option>
                      <option value="1">有</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">数字键盘</label>
                  <div class="col-md-4">
                    <select v-model="machineType.haveNumberKeyboard" required class="form-control">
                      <option value="0">没有</option>
                      <option value="1">有</option>
                    </select>
                  </div>
                  <label class="col-md-2 control-label">控制板</label>
                  <div class="col-md-4">
                    <select v-model="machineType.controlBoardType" required class="form-control">
                      <option value="EG">易购</option>
                      <option value="ZJ">中吉</option>
                      <option value="NEG">新易购</option>
                      <option value="YC">易触</option>
                      <option value="JY">金雨</option>
                      <option value="CHZH">称重</option>
                    </select>
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
  export default{
    name: 'MachineTypeFrom',
    props: ['formTitle'],
    data () {
      return {
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
        machineTypeForm: {},
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
      },
      'machineType.screenSize' (val) {
        if (val === '') {
          this.machineTypeForm.screenSize = true
        } else if (val === 0) {
          this.machineTypeForm.screenSize = true
          this.machineType.screenSize = ''
        } else if (val < 0 || val > 1000) {
          this.machineTypeForm.screenSize = true
          this.machineType.screenSize = ''
          window.alert('请输入小于1000的正整数')
        } else if (val > 0 || val < 1000) {
          this.machineTypeForm.screenSize = false
        }
        this.savebtn()
      },
      'machineType.aisleRowNumber' (val) {
        if (val === '') {
          this.machineTypeForm.aisleRowNumber = true
        } else if (val === 0) {
          this.machineTypeForm.aisleRowNumber = true
          this.machineType.aisleRowNumber = ''
        } else if (val < 0 || val > 1000) {
          this.machineTypeForm.aisleRowNumber = true
          this.machineType.aisleRowNumber = ''
          window.alert('请输入小于1000的正整数')
        } else if (val > 0 || val < 1000) {
          this.machineTypeForm.aisleRowNumber = false
        }
        this.savebtn()
      },
      'machineType.aisleColumnNumber' (val) {
        if (val === '') {
          this.machineTypeForm.aisleColumnNumber = true
        } else if (val === 0) {
          this.machineTypeForm.aisleColumnNumber = true
          this.machineType.aisleColumnNumber = ''
        } else if (val < 0 || val > 1000) {
          this.machineTypeForm.aisleColumnNumber = true
          this.machineType.aisleColumnNumber = ''
          window.alert('请输入小于1000的正整数')
        } else if (val > 0 || val < 1000) {
          this.machineTypeForm.aisleColumnNumber = false  // 通过
        }
        this.savebtn()
      },
      'machineType.enableTouch' (val) {
        if (val === '') {
          this.machineTypeForm.enableTouch = true // 禁用
        } else {
          this.machineTypeForm.enableTouch = false // 开启
          this.machineType.enableTouch = val
        }
        this.savebtn()
      },
      'machineType.haveSelectGoodsButton' (val) {
        if (val === '') {
          this.machineTypeForm.haveSelectGoodsButton = true // 禁用
        } else {
          this.machineTypeForm.haveSelectGoodsButton = false // 开启
          this.machineType.haveSelectGoodsButton = val
        }
        this.savebtn()
      },
      'machineType.haveNumberKeyboard' (val) {
        if (val === '') {
          this.machineTypeForm.haveNumberKeyboard = true // 禁用
        } else {
          this.machineTypeForm.haveNumberKeyboard = false // 开启
          this.machineType.haveNumberKeyboard = val
        }
        this.savebtn()
      },
      'machineType.controlBoardType' (val) {
        if (val === '') {
          this.machineTypeForm.controlBoardType = true // 禁用
        } else {
          this.machineTypeForm.controlBoardType = false // 开启
          this.machineType.controlBoardType = val
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

