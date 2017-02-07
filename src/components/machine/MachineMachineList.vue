<template>
  <div class="row">
    <div class="col-md-12">
      <!-- Control Sidebar -->
      <aside :class="['control-sidebar','no-padding','control-sidebar-light', aside ? 'control-sidebar-open' : '']">
        <div class="box box-widget no-border no-shadow">
          <div class="box-header">
            <h3 class="box-title">组织列表</h3>
            <div class="box-tools pull-right">
              <button type="button" @click="closeOrg" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
            </div>
            <!-- /.box-tools -->
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <treecontrol class="tree-classic" tree-model="treeData"
                         on-selection="showSelected(node)" expanded-nodes="expandedNodes"
                         options="treeOptions"> {{node.orgName}}
            </treecontrol>
          </div>
          <!-- /.box-body -->
        </div>

      </aside>
      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>

      <div class="box box-widget">
        <div class="box-body table-responsive">
          <form class="form-inline" novalidate>
            <div class="input-group">
              <input type="text" disabled :value="currentOrg" class="form-control" placeholder="组织名称">
              <span class="input-group-btn">
                            <button @click="openOrg" class="form-control btn btn-default" type="button"><i
                              class="fa fa-sitemap"></i>选择组织</button>
                          </span>
            </div>
            <!-- /input-group -->
            <div class="form-group" style="margin: 0 10px;">
              <label style="margin-right: 10px" class="control-label">机器编号:</label>
              <input style="max-width: 120px;" type="text" v-model="searchMachine.machineCode" class="form-control"
                     placeholder="查询机器编号"/>
            </div>
            <div class="form-group" style="margin: 0 10px;">
              <label style="margin-right: 10px" class="control-label">在线状态:</label>

              <select v-model="searchMachine.online" style="min-width: 80px" class="form-control">
                <option value="">全部</option>
                <option value="true">在线</option>
                <option value="false">离线</option>
              </select>
            </div>
            <div class="form-group" style="margin: 10px;">
              <button type="button" @click="refreshData" class="form-control btn btn-success">
                <i class="fa fa-search"></i> 查询
              </button>
            </div>
          </form>
        </div>
      </div>

      <div us-spinner spinner-key="machine-list-spinner" class="col-md-12">
        <div class="box box-widget">
          <div class="box-header">
            <h3 class="box-title">设备列表<span class="badge">{{pageMachine.totalElements}}</span></h3>
          </div>
          <div class="box-body table-responsive no-padding" style="overflow-x: visible">
            <table class="table table-striped table-hover">
              <tbody>
              <tr>
                <th>机器编号</th>
                <th>机器名称</th>
                <th>所在组织</th>
                <th>支付方式</th>
                <th>注册时间</th>
                <th style="text-align: center">
                  <button class="btn btn-xs btn-warning text-center"
                          @click="bindingTemplate"
                          tooltip="绑定模板" tooltip-trigger tooltip-placement="top">绑定模板
                  </button>
                  <button class="btn btn-xs btn-success text-center"
                          @click="openPushAdvertise"
                          tooltip="推送广告" tooltip-trigger tooltip-placement="top">推送广告
                  </button>
                  <button class="btn btn-xs btn-success text-center"
                          @click="openPushVersion"
                          tooltip="推送版本" tooltip-trigger tooltip-placement="top">推送版本
                  </button>

                </th>
              </tr>
              <tr v-for="machine in machineInfos">
                <td><input type="checkbox" v-model="machine.selected">&nbsp;&nbsp;{{machine.machineCode}}
                </td>
                <td>{{machine.machineName}}</td>
                <td>{{machine.organizationName}}</td>
                <td>{{machine.payNames}}</td>
                <td>{{dateInit(machine.gmtCreated)}}
                </td>
                <td style="text-align: center">
                  <button @click="gotoMachineAisleGoods(machine.machineId)"
                          class="btn btn-xs btn-primary">查看货道
                  </button>
                  <div class="btn-group hidden-md hidden-lg">
                    <a class="btn" @click="openForm(machine)">
                      <i class="fa fa-gear"></i>
                    </a>
                    <a class="btn" @click="openOrgForm(machine)">
                      <i class="fa fa-sitemap"></i>
                    </a>
                    <a class="btn" @click="reboot(machine.machineId)">
                      <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn" @click="delete(machine)">
                      <i class="fa fa-trash-o"></i>
                    </a>
                  </div>
                  <div class="btn-group hidden-sm hidden-xs" dropdown is-open="status.isopen">
                    <button type="button" class="btn btn-xs btn-primary dropdown-toggle"
                            dropdown-toggle>&nbsp;&nbsp;操&nbsp;&nbsp;作&nbsp;&nbsp;<span
                      class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a @click="openAddressForm(machine.machineId)">
                          机器地址
                        </a>
                      </li>
                      <li>
                        <a @click="openForm(machine)">修改机器</a>
                      </li>
                      <li>
                        <a @click="openOrgForm(machine)">授权组织</a>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li>
                        <a @click="reboot(machine.machineId)">
                          重启机器
                        </a>
                      </li>
                      <li>
                        <a @click="delete(machine)">
                          删除机器
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span v-my-tooltip.top-center="dateInit(machine.offlineOrOnlineTime)" class="label label-default"
                        v-show=''>离线</span>
                  <span v-my-tooltip.top-center="dateInit(machine.offlineOrOnlineTime)" class="label label-success"
                  >在线</span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!--以下是分页-->
          <boot-page :pageTotal='pageTotal' :len='len' :page-len="pageLen"></boot-page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import bootPage from './BootPage'
  export default{
    name: 'MachineMachineList',
    data () {
      return {
        node: {},
        currentOrg: '',
        searchMachine: {},
        aside: null,
        pageMachine: {},
        machineInfos: {},
        // 以下是分页组件设置
        len: 10,
        pageLen: 5, // 可显示的分页数
        // url: '/bootpage/', // 请求路径
        param: {}, // 传递参数
        // 总页数
        pageTotal: 0,
        tableList: [] // 分页组件传回的分页后数据
      }
    },
    components: {
      bootPage
    },
    watch: {
      page (val) {
        this.formpageupdate(val)
      }
    },
    computed: {
      page () {
        return this.$store.state.adminMachine.machinelistpage
      }
    },
    mounted () {
      let _this = this
      axios.post('http://localhost:9999/machine/page',
        {pageNumber: _this.page, pageSize: _this.len}
      ).then(function (res) {
        if (res.data) {
          _this.machineInfos = res.data.content
          _this.pageTotal = res.data.totalPages
        }
      })
    },
    methods: {
      openOrg () {
        if (this.aside === true) {
          this.aside = false
        } else {
          this.aside = true
        }
      },
      formpageupdate (page) {
        let _this = this
        axios.post('http://localhost:9999/machine/page',
          {pageNumber: page, pageSize: _this.len}
        ).then(function (res) {
          if (res.data) {
            _this.machineInfos = res.data.content
          }
        })
      },
      closeOrg () {
        this.aside = false
      },
      refreshData () {
        console.log('hehe')
      },
      bindingTemplate () {
        console.log('绑定模板')
      },
      openPushAdvertise () {
        console.log('推送广告')
      },
      openPushVersion () {
        console.log('推送版本')
      },
      // 时间格式化
      dateInit (data) {
        let date = new Date(data)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes()
        return (Y + M + D + h + m)
      }
    }
  }
</script>

<style lang="scss">
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
