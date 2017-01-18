<template>
  <div class="col-md-12">
    <h3>
      设备类型&nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-primary" @click="openForm">
        <i class="fa fa-pencil-square-o"></i>&nbsp;新建类型
      </button>
    </h3>
    <div us-spinner spinner-key="machine-type-list-spinner" class="box-body table-responsive">
      <table class="table table-striped table-hover ">
        <tr>
          <th>ID</th>
          <th>类型名称</th>
          <th>货道行数</th>
          <th>货道列数</th>
          <th>屏幕尺寸</th>
          <th>触屏</th>
          <th>选货按键</th>
          <th>数字键盘</th>
          <th>控制板类型</th>
          <th>操作
            <button class="btn btn-xs btn-default pull-right"
                    @click="refreshData(true)">刷新
            </button>
          </th>
        </tr>

        <!--<tr v-for="machineType in machineTypes">-->
          <!--<td>-->
            <!--<input type="checkbox">-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.typeName}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.aisleRowNumber}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.aisleColumnNumber}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.screenSize}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.enableTouch=='1' ? '是':'否'}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.haveSelectGoodsButton=='1' ? '有':'没有'}}-->
          <!--</td>-->
          <!--<td>-->
            <!--{{machineType.haveNumberKeyboard=='1' ? '有':'没有'}}-->
          <!--</td>-->
          <!--<td ng-switch="machineType.controlBoardType">-->
            <!--<span ng-switch-when="ZJ">中吉</span>-->
            <!--<span ng-switch-when="NEG">新易购</span>-->
            <!--<span ng-switch-when="JY">金雨</span>-->
            <!--<span ng-switch-when="YC">易触</span>-->
            <!--<span ng-switch-when="CHZH">称重</span>-->
            <!--<span ng-switch-default>易购</span>-->
          <!--</td>-->
          <!--<td>-->
            <!--<button class="btn btn-sm btn-primary" @click="openForm(machineType)">修改-->
            <!--</button>-->
            <!--<button class="btn btn-sm btn-danger" @click="delete(machineType)" confirm="确定删除机器类型：{{machineType.typeName}}?" confirm-settings="{size: 'sm'}"><i class="fa fa-trash-o"></i>&nbsp;删除-->
            <!--</button>-->
          <!--</td>-->
        <!--</tr>-->
      </table>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'MachineTypeList',
    data () {
      return {}
    },
    components: {},
    watch: {},
    computed: {},
    mounted () {
    },
    methods: {
      openForm (type) {
        console.log('openForm')
      },
      delete (type) {

      },
      refreshData () {

      }
    }
  }
</script>

<style lang="scss">
</style>
