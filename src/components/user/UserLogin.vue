<template>
  <div class="login-wrap login-box">
    <div class="login-logo">
      <a><b>前海易购</b></a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">用户登录</p>
      <form @submit.prevent autocomplete="off">
        <div class="form-group has-feedback">
          <label>用户名</label>
          <input type="text" class="form-control" required
                 v-model="user.username" autofocus @focus="initDanger">
        </div>
        <div class="form-group">
          <label for="input-key">密码</label>
          <input type="password" id="input-key" class="form-control" required
                 v-model="user.password" @focus="initDanger">
        </div>
        <div class="alert alert-danger" v-if="alertDanger">
          <i class="fa fa-warning"></i>{{danger}}
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="user.remember"> <span class="login-auto">自动登录</span>
          </label>
          <input type="submit" class="btn btn-success pull-right" @click="login" value="登录">
        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
  import Qs from 'qs'
  import axios from 'axios'
  export default {
    name: 'Login',
    data () {
      return {
        user: {},
        alertDanger: false,
        danger: ''
      }
    },
    mounted () {
      let _this = this
      _this.user.remember = false
      if (_this.danger) {
        _this.alertDanger = true
      }
    },
    methods: {
      initDanger () {
        this.alertDanger = false
        this.danger = null
      },
      login () {
        let _this = this
        if (_this.user.username != null && _this.user.password != null && _this.user.username !== '' && _this.user.password !== '') {
          axios.post('/login', {
            'remember-me': _this.user.remember,
            'remember': _this.user.remember,
            'username': _this.user.username,
            'password': _this.user.password
          }, {
            baseURL: 'http://localhost:9999',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: [function (data) {
              data = Qs.stringify(data)
              return data
            }]
          })
            .then(function (res) {
              if (res.data === '') {
                axios.get('/users/' + _this.user.username + '?' + 'by=name', {
                  baseURL: 'http://localhost:9999',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                  transformRequest: [function (data) {
                    data = Qs.stringify(data)
                    return data
                  }]
                }).then(function (res) {
                  if (res.data) {
                    _this.$store.commit('setCurrentUser', res.data)
                    _this.$store.commit('setUserInfo', res.data.userInfo)
                    _this.$router.push('/')
                  }
                })
              } else if (res.data.status === 401) {
                _this.danger = '用户不存在或者密码错误！'
                _this.alertDanger = true
              }
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
