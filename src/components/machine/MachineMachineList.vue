<template>
  <div class="row">
    <div class="col-md-12" ng-if="$root.haveAuth('010301', currentUser.rules)">
      <!-- Control Sidebar -->
      <aside ng-class="{'control-sidebar-open': openedOrg}" class="control-sidebar no-padding control-sidebar-light">
        <div class="box box-widget no-border no-shadow">
          <div class="box-header">
            <h3 class="box-title">组织列表</h3>

            <div class="box-tools pull-right">
              <button type="button" ng-click="closeOrg()" class="btn btn-box-tool"><i class="fa fa-times"></i></button>
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
              <input type="text" disabled value="{{currentOrg}}" class="form-control" placeholder="组织名称">
              <span class="input-group-btn">
                            <button ng-click="openOrg()" class="form-control btn btn-default" type="button"><i class="fa fa-sitemap"></i>选择组织</button>
                          </span>
            </div>
            <!-- /input-group -->
            <div class="form-group" style="margin: 0 10px;">
              <label style="margin-right: 10px" class="control-label">机器编号:</label>
              <input style="max-width: 120px;" type="text" ng-model="searchMachine.machineCode" class="form-control"
                     placeholder="查询机器编号"/>
            </div>
            <div class="form-group" style="margin: 0 10px;">
              <label style="margin-right: 10px" class="control-label">在线状态:</label>

              <select ng-model="searchMachine.online" style="min-width: 80px" class="form-control">
                <option value="">全部</option>
                <option value="true">在线</option>
                <option value="false">离线</option>
              </select>
            </div>
            <div class="form-group" style="margin: 10px;">
              <button type="button" ng-click="refreshData()" class="form-control btn btn-success">
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
              <tr>
                <th>机器编号</th>
                <th>机器名称</th>
                <th>所在组织</th>
                <th>支付方式</th>
                <th>注册时间</th>
                <th style="text-align: center">
                  <button class="btn btn-xs btn-warning text-center"
                          data-ng-click="bindingTemplate()"
                          tooltip="绑定模板" tooltip-trigger tooltip-placement="top"
                          ng-if="$root.haveAuth('010305', currentUser.rules)">绑定模板
                  </button>
                  <button class="btn btn-xs btn-success text-center"
                          data-ng-click="openPushAdvertise()"
                          tooltip="推送广告" tooltip-trigger tooltip-placement="top"
                          ng-if="$root.haveAuth('010311', currentUser.rules)">推送广告
                  </button>
                  <button class="btn btn-xs btn-success text-center"
                          data-ng-click="openPushVersion()"
                          tooltip="推送版本" tooltip-trigger tooltip-placement="top"
                          ng-if="$root.haveAuth('010310', currentUser.rules)">推送版本
                  </button>
                </th>
              </tr>
              <tr ng-repeat="machine in machineInfos">
                <td><input type="checkbox" ng-model="machine.selected">&nbsp;&nbsp;{{machine.machineCode}}
                </td>
                <td>{{machine.machineName}}</td>
                <td>{{machine.organizationName}}</td>
                <td>{{machine.payNames}}</td>
                <td>{{machine.gmtCreated |
                  date : 'yyyy-MM-dd HH:mm'}}
                </td>
                <td style="text-align: center">
                  <button ng-if="machine.machineTypeInfo && $root.haveAuth('010306', currentUser.rules)"
                          data-ng-click="gotoMachineAisleGoods(machine.machineId)"
                          class="btn btn-xs btn-primary">查看货道
                  </button>
                  <div class="btn-group hidden-md hidden-lg">
                    <a class="btn" href="" data-ng-click="openForm(machine)" ng-if="$root.haveAuth('010302', currentUser.rules)">
                      <i class="fa fa-gear"></i>
                    </a>
                    <a class="btn" href="" data-ng-click="openOrgForm(machine)" ng-if="$root.haveAuth('010308', currentUser.rules)">
                      <i class="fa fa-sitemap"></i>
                    </a>
                    <a class="btn" href="" ng-if="$root.haveAuth('010307', currentUser.rules)" data-ng-click="reboot(machine.machineId)"
                       confirm="确定重启机器：{{machine.machineCode}}?"
                       confirm-settings="{size: 'sm'}"
                       confirm-title="确认">
                      <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn" href="" ng-if="$root.haveAuth('010304', currentUser.rules)" data-ng-click="delete(machine)"
                       confirm="确定删除设备：{{machine.machineCode}}?删除后不能恢复。"
                       confirm-settings="{size: 'sm'}"
                       confirm-title="确认">
                      <i class="fa fa-trash-o"></i>
                    </a>
                  </div>
                  <div ng-if="$root.haveAuth('010303', currentUser.rules)||$root.haveAuth('010302', currentUser.rules)||$root.haveAuth('010308', currentUser.rules)||$root.haveAuth('010307', currentUser.rules)||$root.haveAuth('010304', currentUser.rules)"
                       class="btn-group hidden-sm hidden-xs" dropdown is-open="status.isopen">
                    <button type="button" class="btn btn-xs btn-primary dropdown-toggle"
                            dropdown-toggle>&nbsp;&nbsp;操&nbsp;&nbsp;作&nbsp;&nbsp;<span
                      class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li ng-if="$root.haveAuth('010303', currentUser.rules)">
                        <a href="" ng-click="openAddressForm(machine.machineId)">
                          机器地址
                        </a>
                      </li>
                      <li ng-if="$root.haveAuth('010302', currentUser.rules)">
                        <a href="" data-ng-click="openForm(machine)">修改机器</a>
                      </li>
                      <li ng-if="$root.haveAuth('010308', currentUser.rules)">
                        <a href="" data-ng-click="openOrgForm(machine)">授权组织</a>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li ng-if="$root.haveAuth('010307', currentUser.rules)">
                        <a href="" data-ng-click="reboot(machine.machineId)"
                           confirm="确定重启机器：{{machine.machineCode}}?"
                           confirm-settings="{size: 'md'}">
                          重启机器
                        </a>
                      </li>
                      <li ng-if="$root.haveAuth('010304', currentUser.rules)">
                        <a href="" data-ng-click="delete(machine)"
                           confirm="确定删除设备：{{machine.machineCode}}?删除后不能恢复。"
                           confirm-settings="{size: 'md'}"
                           confirm-title="确认">
                          删除机器
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span tooltip="{{machine.offlineOrOnlineTime | date : 'yyyy-MM-dd HH:mm'}}" tooltip-trigger
                        tooltip-placement="top" ng-hide="machine.online" class="label label-default">离线</span>
                  <span tooltip="{{machine.offlineOrOnlineTime | date : 'yyyy-MM-dd HH:mm'}}" tooltip-trigger
                        tooltip-placement="top" ng-show="machine.online" class="label label-success">在线</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="row text-center">
            <pagination class="pagination-sm" boundary-links="true"
                        max-size="6"
                        items-per-page="searchMachine.pageSize"
                        total-items="pageMachine.totalElements"
                        ng-model="searchMachine.pageNumber"
                        ng-change="pageChanged(searchMachine.pageNumber)"
                        previous-text="&lt;" next-text="&gt;"
                        first-text="&lt;&lt;" last-text="&gt;&gt;">
            </pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>

</style>
