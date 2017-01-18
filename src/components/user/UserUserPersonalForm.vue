<template>
  <div class="modal fade ng-isolate-scope browse-origin-modal in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="machine-type-form-bc">
          <form class="form-horizontal" @submit.prevent autocomplete="off" novalidate>
            <div class="modal-body">
              <fieldset>
                <legend>
                  <small>上次登录时间:{{dateInit(userInfo.lastLoginTime)}}</small>
                </legend>
                <div class="form-group">
                  <label class="col-md-2 control-label">中文名</label>
                  <div class="col-md-4">
                    <input type="text" name="chineseName" v-model="userChineseName" maxlength="8" required
                           placeholder="真实姓名" class="form-control">
                    <span v-if="userPersonalForm.chineseName" class="help-block">真实姓名不能为空,最长为8位.</span>
                  </div>
                  <label class="col-md-2 control-label">上次登录IP</label>
                  <div class="col-md-4">
                    <input type="text" readonly name="email" v-model="userInfo.lastLoginIp" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">邮箱</label>
                  <div class="col-md-4">
                    <input type="email" name="email" v-model="userEmail"
                           placeholder="电子邮箱地址" class="form-control">
                    <span v-if="userPersonalForm.email" class="help-block">邮箱格式不正确.</span>
                  </div>
                  <label class="col-md-2 control-label">手机号</label>
                  <div class="col-md-4">
                    <input type="text" name="mobile" v-model="userMobile" placeholder="常用手机号" class="form-control">
                    <span v-if="userPersonalForm.mobile" class="help-block">手机号格式不正确.</span>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="modal-footer">
              <a class="btn btn-default" @click="dismiss">关闭</a>
              <input type="submit" class="btn btn-submit-bc" :disabled='savebtnDisabled' @click="save" value="保存">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserPersonalForm',
    props: ['userInfo'],
    data () {
      return {
        userChineseName: this.userInfo.chineseName,
        userEmail: this.userInfo.email,
        userMobile: this.userInfo.mobile,
        userPersonalForm: {},
        savebtnDisabled: false
      }
    },
    watch: {
      userChineseName (val) {
        if (val === '') {
          this.userPersonalForm.chineseName = true
        } else {
          this.userPersonalForm.chineseName = false
        }
        this.savebtn()
        this.userChineseName = val
        console.log(this.userInfo.chineseName)
      },
      userEmail (val) {
        this.email(val)
        this.savebtn()
        this.userEmail = val
        console.log(this.userEmail)
      },
      userMobile (val) {
        this.mobile(val)
        this.savebtn()
        this.userMobile = val
        console.log(this.userMobile)
      }
    },
    computed: {},
    mounted () {
    },
    methods: {
      chineseName (e) {
        if (this.userChineseName === '') {
          this.userPersonalForm.chineseName = true
        }
      },
      email (email) {
        let re = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/
        if (!re.test(email)) {
          this.userPersonalForm.email = true
        } else {
          this.userPersonalForm.email = false
        }
      },
      mobile (mob) {
        let re = /(^(13\d|15[^4,\D]|17[13678]|18\d)\d{8}|170[^346,\D]\d{7})$/
        if (!re.test(mob)) {
          this.userPersonalForm.mobile = true
        } else {
          this.userPersonalForm.mobile = false
        }
      },
      // 关闭
      dismiss () {
        this.$emit('dismiss')
      },
      // 保存
      save () {
        console.log('save')
        this.$emit('dismiss')
      },
      savebtn () {
        if (this.userPersonalForm.chineseName === true || this.userPersonalForm.email === true || this.userPersonalForm.mobile === true) {
          this.savebtnDisabled = true
        } else {
          this.savebtnDisabled = false
        }
      },
      // 时间格式化
      dateInit (data) {
        let date = new Date(data)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds()
        return (Y + M + D + h + m + s)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
