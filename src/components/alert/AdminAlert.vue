<template>
  <div class="adminAlert" v-if="adminAlert.show">
    <div :class="[adminAlert.style ? adminAlert.style : '', icon, item]">
      <button type="button" class="close" @click="close" aria-hidden="true">×</button>
      <h4 class="title"></h4>
      <div class="text">{{adminAlert.text}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'AdminAlert',
    data () {
      return {
        icon: 'icon',
        item: 'item'
      }
    },
    mounted () {
    },
    watch: {
      adminAlert (val) {
        if (val.show === true && val.show) {
          setTimeout(this.close, 2000)
        }
      }
    },
    computed: {
      adminAlert () {
        return this.$store.state.admin.adminAlert
      }
    },
    methods: {
      close () {
        const adminAlert = {}
        this.$store.dispatch('adminAlert', adminAlert)
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  .adminAlert {
    top: 10px;
    left: 50%;
    margin-left: -200px;
    position: fixed;
    float: right;
    width: 90%;
    max-width: 400px;
    z-index: 9999;
    .item {
      background-position: 12px center;
      background-repeat: no-repeat;
      padding: 10px 15px;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 3px;
      .title {
        margin: 0 0 0 40px;
        font-size: 16px;
      }
      .text{
        margin: 0 0 0 40px;
      }
      .close{
        line-height: 0.8;
      }
    }
    .alert-error.icon {
      background-image: url(/static/images/alert-error.png);
    }
    .alert-warning.icon {
      background-image: url(/static/images/alert-warning.png);
    }
    .alert-info.icon {
      background-image: url(/static/images/alert-info.png);
    }
    .alert-success.icon {
      background-image: url(/static/images/alert-success.png);
    }
  }
</style>
