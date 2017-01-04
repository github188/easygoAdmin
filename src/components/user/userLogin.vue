<template>
  <div class="login-wrap login-box">
    <div class="login-logo">
      <a href="#"><b>前海易购</b></a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">用户登录</p>
      <form>
        <div class="form-group has-feedback">
          <label>用户名</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="input-key">密码</label>
          <input type="password" id="input-key" class="form-control">
        </div>
        <div class="alert alert-danger" v-if="alertDanger">
          <i class="fa fa-warning"></i>{{danger}}
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox"><span class="login-auto">自动登录</span>
          </label>
          <input type="submit" class="btn btn-success pull-right" value="登录">
        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      alertDanger: false,
      danger: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    let _this = this
    if (_this.danger) {
      _this.alertDanger = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
