<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="channel-form-bc">
          <form class="form-horizontal" @submit.prevent autocomplete="off">
            <div class="modal-body">
              <fieldset>
                <legend>{{formTitle}}</legend>
                <div class="form-group">
                  <label class="col-sm-3 control-label">用户名</label>
                  <div class="col-sm-6">
                    <input type="text" readonly="true" :value="userName" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label"><sup><i class="fa fa-asterisk text-danger"></i></sup>原密码</label>
                  <div class="col-sm-6">
                    <input type="password" v-model.trim="user.password" class="form-control" required
                           placeholder="输入原密码">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label"><sup><i class="fa fa-asterisk text-danger"></i></sup>新密码</label>
                  <div class="col-sm-6">
                    <input type="password" v-model.trim="user.newPwd1" @focus="initPwd" @blur="validatePwd"
                           class="form-control" required placeholder="输入新密码">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label"><sup><i class="fa fa-asterisk text-danger"></i></sup>新密码</label>
                  <div class="col-sm-6">
                    <input type="password" v-model.trim="user.newPwd2" @focus="initPwd" @blur="validatePwd"
                           class="form-control" required placeholder="确认新密码">
                  </div>
                </div>
                <div class="alert alert-danger" v-if="isValid">
                  <i class="fa fa-warning"></i>{{invalidMessage.infoForm}}
                </div>
              </fieldset>
            </div>
            <div class="modal-footer">
              <a class="btn btn-default" @click="dismiss">关闭</a>
              <input type="submit" class="btn btn-submit-bc" @click="save" value="保存">
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
    name: 'UserEditPassword',
    // props: ['username'],
    data () {
      return {
        formTitle: '修改密码',
        user: {},
        invalidMessage: {},
        userName: this.username,
        isValid: false,
        adminAlert: {}
      }
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      // 获取焦点
      initPwd () {
        const _this = this
        _this.isValid = false
        _this.invalidMessage.infoForm = null
        return _this.isValid
      },
      // 失去焦点
      validatePwd () {
        const _this = this
        _this.isValid = false
        if (_this.user.newPwd1 && _this.user.newPwd2 && _this.user.newPwd1 !== _this.user.newPwd2) {
          _this.invalidMessage.infoForm = '第二次输入的新密码与第一次输入的新密码不一致！'
          _this.isValid = true
        } else if (_this.user.password && _this.user.newPwd1 && _this.user.newPwd2 && _this.user.password === _this.user.newPwd2 && _this.user.password === _this.user.newPwd1) {
          _this.invalidMessage.infoForm = '新密码不能和原密码一致'
          _this.isValid = true
        }
        return _this.isValid
      },
      // 提交保存
      save () {
        const _this = this
        if (!this.validatePwd()) {
          axios.put('http://localhost:9999/users' + '/editPwd?' + 'newPwd=' + _this.user.newPwd1, {
            'password': _this.user.password,
            'userName': _this.userName
          }).then(function (res) {
            if (res.result === 1) {
              _this.adminAlert.show = true
              _this.adminAlert.style = 'alert-success'
              _this.adminAlert.text = '密码修改成功'
              _this.$store.dispatch('adminAlert', _this.adminAlert)
              _this.user = {}
            } else if (res.result === -11) {
              _this.adminAlert.show = true
              _this.adminAlert.style = 'alert-error'
              _this.adminAlert.text = '原密码输入错误，请重新输入！'
              _this.$store.dispatch('adminAlert', _this.adminAlert)
            } else {
              _this.invalidMessage.infoForm = res.errorMsg
            }
          })
        }
      },
      // 关闭按钮
      dismiss () {
        this.user = {}
        this.$emit('dismiss')
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
</style>
