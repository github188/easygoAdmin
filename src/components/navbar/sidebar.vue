<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">菜单</li>
        <li :class="{active: currentTab=='home.dashboard'}">
          <a>
            <i class="fa fa-dashboard"></i><span>仪表台</span>
            <small class="label pull-right bg-green">new</small>
          </a>
        </li>
        <li :class="{'active': currentTab=='machine'}"
            class="treeview">
          <a @click="machineBtn">
            <i class="fa fa-fax"></i>
            <span>设备管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.machine">
              <li :class="{'active': currentTab=='machine.type'}">
                <a @click="gotoMachineType"><i class="fa fa-cog"></i>机器类型</a>
              </li>
              <li :class="{'active': currentTab=='machine.aisle'}">
                <a @click="gotoAisleTemplate"><i class="fa fa-table"></i>货道模板</a>
              </li>
              <li :class="{'active': currentTab=='machine.list'}">
                <a @click="gotoMachineList"><i class="fa fa-android"></i>设备列表</a>
              </li>
              <li :class="{'active': currentTab=='machine.map'}">
                <a @click="gotoMachineMap"><i class="fa fa-map-marker"></i>设备地图</a>
              </li>
              <li :class="{'active': currentTab=='machine.copy'}">
                <a @click="gotoMachineCopy"><i class="fa fa-copy"></i>设备复制</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='promotion'}"
            class="treeview">
          <a @click="promotionBtn">
            <i class="fa fa-shopping-cart"></i>
            <span>促销管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.promotion">
              <li>
                <a @click="gotoPromotionDesc"><i class="fa fa-th-large"></i>促销描述</a>
              </li>
              <li>
                <a @click="gotoPromotionList"><i class="fa fa-list"></i>促销活动</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='advertise'}"
            class="treeview">
          <a @click="advertiseBtn">
            <i class="fa fa-list-alt"></i> <span>广告管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.advertise">
              <li>
                <a @click="gotoAdvertise"><i class="fa fa-list-alt"></i>广告资源</a>
              </li>
              <li>
                <a @click="gotoFinishPushAdvertise"><i class="fa fa-desktop"></i>已推送广告</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='report'}"
            class="treeview">
          <a @click="reportBtn">
            <i class="fa fa-bar-chart"></i> <span>报表管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.report">
              <li :class="{'active': currentTab=='report.list'}">
                <a @click="gotoOrderList"><i class="fa fa-bar-chart"></i>订单列表</a>
              </li>
              <li :class="{'active': currentTab=='report.fill'}">
                <a @click="gotoFillGoodsList"><i class="fa fa-area-chart"></i>补货统计</a>
              </li>
              <li :class="{'active': currentTab=='report.profit'}">
                <a @click="gotoProfitReport"><i class="fa fa-line-chart"></i>利润统计</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='system'}"
            class="treeview">
          <a @click="systemBtn">
            <i class="fa fa-cogs"></i> <span>系统管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.system">
              <li>
                <a @click="gotoPayTypeList"><i class="fa fa-money"></i>支付方式</a>
              </li>
              <li>
                <a @click="gotoAndroidVersionList"><i class="fa fa-android"></i>安卓版本</a>
              </li>
              <li>
                <a @click="gotoGoods"><i class="fa fa-tag"></i>商品管理</a>
              </li>
              <li>
                <a @click="gotoEgocard"><i class="fa fa-credit-card"></i>充易购卡</a>
              </li>
              <li>
                <a @click="gotoEgocardCreate"><i class="fa fa-credit-card"></i>生成易购卡</a>
              </li>
              <li>
                <a @click="gotoMercardCreate"><i class="fa fa-credit-card"></i>生成商户卡</a>
              </li>
            </ul>
          </transition>
        </li>
        <li>
          <a @click="gotoOrgTree">
            <i class="fa fa-university"></i><span>组织管理</span>
          </a>
        </li>
        <li>
          <a @click="gotoUserList">
            <i class="fa fa-users"></i><span>用户管理</span>
          </a>
        </li>
        <li>
          <a @click="gotoRoleList">
            <i class="fa fa-cog"></i><span>角色管理</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  export default{
    name: 'NavSidebar',
    data () {
      return {
        show: {
          machine: false,
          promotion: false,
          advertise: false,
          report: false,
          system: false
        }
      }
    },
    mounted () {
      // ready
    },
    methods: {
      machineBtn () {
        if (this.show.machine === false) {
          this.show.machine = true
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
        } else {
          this.show.machine = false
        }
      },
      promotionBtn () {
        if (this.show.promotion === false) {
          this.show.machine = false
          this.show.promotion = true
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
        } else {
          this.show.promotion = false
        }
      },
      advertiseBtn () {
        if (this.show.advertise === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = true
          this.show.report = false
          this.show.system = false
        } else {
          this.show.advertise = false
        }
      },
      reportBtn () {
        if (this.show.report === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = true
          this.show.system = false
        } else {
          this.show.report = false
        }
      },
      systemBtn () {
        if (this.show.system === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = true
        } else {
          this.show.system = false
        }
      },
      gotoMachineType () {
        this.$router.push('/machine/type')
      },
      gotoAisleTemplate () {
        this.$router.push('/machine/aisle')
      },
      gotoMachineList () {
        this.$router.push('/machine/list')
      },
      gotoMachineMap () {
        this.$router.push('/machine/map')
      },
      gotoMachineCopy () {
        this.$router.push('/machine/copy')
      },
      gotoPromotionDesc () {
        this.$router.push('/promotion/desc')
      },
      gotoPromotionList () {
        this.$router.push('/promotion/list')
      },
      gotoAdvertise () {
        this.$router.push('/advertise/list')
      },
      gotoFinishPushAdvertise () {
        this.$router.push('/advertise/pushList')
      },
      gotoOrderList () {
        this.$router.push('/report/order')
      },
      gotoFillGoodsList () {
        this.$router.push('/report/fillGoods')
      },
      gotoProfitReport () {
        this.$router.push('/report/profit')
      },
      gotoPayTypeList () {
        this.$router.push('/system/sysPay')
      },
      gotoAndroidVersionList () {
        this.$router.push('/system/sysAndroid')
      },
      gotoGoods () {
        this.$router.push('/goods/list')
      },
      gotoEgocard () {
        this.$router.push('/system/sysEgocard')
      },
      gotoEgocardCreate () {
        this.$router.push('/system/sysEgocardCreate')
      },
      gotoMercardCreate () {
        this.$router.push('/system/sysMercardCreate')
      },
      gotoOrgTree () {
        this.$router.push('/org')
      },
      gotoUserList () {
        this.$router.push('/user/list')
      },
      gotoRoleList () {
        this.$router.push('/role/list')
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  a {
    cursor: pointer;
  }

  .treeview-menu {
    display: block;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
    height: 100%;
  }

  .slide-fade-leave-active {
    transition: all .1s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateY(0px);
    opacity: 0;
    height: 0;
  }

</style>
