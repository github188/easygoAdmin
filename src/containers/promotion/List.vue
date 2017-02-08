<template>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-widget">
        <div class="box-header">
          <h3 class="box-title">活动列表</h3>

          <div class="box-tools">
            <div class="input-group input-group-sm">
              <div class="input-group-btn">
                <button class="btn btn-primary pull-right" @click="newGoods">
                  <i class="fa  fa-pencil-square-o"></i>&nbsp;新建活动
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding" us-spinner spinner-key="goods-list-spinner">
          <table class="table table-hover table-striped">
            <tbody>
            <tr>
              <th>活动名称</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th>活动类型</th>
              <th>参与机器</th>
              <th>参与商品</th>
            </tr>
            <tr v-for="promotion in promotions">
              <td>
                {{promotion.promotionName}}
              </td>
              <td>
                {{promotion.promotionStartTime}}
              </td>
              <td>
                {{promotion.promotionEndTime}}
              </td>
              <td>
                {{promotion.promotionType}}
              </td>
              <td>
                {{promotion.promotionMachine}}
              </td>
              <td>
                {{promotion.promotionProduct}}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- /.box-body -->
        <!--以下是分页-->
        <boot-page :pageTotal='pageTotal' :len='len' :page-len="pageLen"></boot-page>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import bootPage from '../../components/promotion/PromotionListBootPage'
  export default{
    name: 'PromotionList',
    data () {
      return {
        promotions: [{
          promotionName: '广州汇丰软件第二瓶半价促销',
          promotionStartTime: '2015-12-20 8:00',
          promotionEndTime: '2016-02-08 22:00',
          promotionType: '第二瓶半价',
          promotionProduct: '百事可乐瓶装600ml',
          promotionMachine: '广州汇丰软件'
        }, {
          promotionName: '深圳维他奶元旦抽奖促销',
          promotionStartTime: '2016-01-01 00:00',
          promotionEndTime: '2016-01-03 23:59',
          promotionType: '抽奖',
          promotionProduct: '维他柠檬茶罐装310ml',
          promotionMachine: 'EGQZ0200155:A3,EGQZ0200188:C1'
        }, {
          promotionName: '指定机器试饮第二瓶半价活动',
          promotionStartTime: '2015-12-01 08:00',
          promotionEndTime: '2016-04-11 20:00',
          promotionType: '第二瓶半价',
          promotionProduct: '清酷金明露瓶装350ml',
          promotionMachine: 'EGQZ0200312:D6'
        }, {
          promotionName: '广州海珠体育中心佳得乐抽奖促销',
          promotionStartTime: '2016-01-11 00:00',
          promotionEndTime: '2016-03-23 23:59',
          promotionType: '抽奖',
          promotionProduct: '佳得乐运动饮料瓶装600ml',
          promotionMachine: 'EGQZ0200055:D1,EGQZ0200088:E6'
        }],
        len: 10,
        pageLen: 5,
        // 总页数
        pageTotal: 1
      }
    },
    components: {
      bootPage
    },
    mounted () {
      // let _this = this
      // axios.post('http://localhost:9999/machine/page',
      //   {pageNumber: _this.page, pageSize: _this.len}
      // ).then(function (res) {
      //   if (res.data) {
      //     _this.machineInfos = res.data.content
      //     _this.pageTotal = res.data.totalPages
      //   }
      // })
    },
    methods: {
      newGoods () {
        console.log('new')
      }
    }
  }
</script>

<style lang="scss">
</style>
