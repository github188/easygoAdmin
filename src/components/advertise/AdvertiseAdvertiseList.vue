<template>
  <div class="row">
    <div class="col-md-12">
      <div class="box box-widget">
        <div class="box-header">
          <h3 class="box-title">广告列表</h3>
          <div class="box-tools">
            <button class="btn bg-purple" @click="openForm('新建')">
              新建广告
            </button>
          </div>
        </div>
        <div us-spinner spinner-key="advertiseTable" class="box-body table-responsive no-padding">
          <table class="table table-striped table-hover ">
            <tbody>
            <tr>
              <th>ID</th>
              <th>广告名称</th>
              <th>广告类型</th>
              <th>显示时间</th>
              <th>下载链接</th>
              <th>资源大小</th>
              <th>优先级</th>
              <th>操作
                <button class="btn btn-xs btn-default"
                        @click="refreshData">刷新
                </button>
              </th>
            </tr>
            <tr v-for="(advertiseInfo,index) in advertiseInfos">
              <td>
                {{advertiseInfo.advertisementId}}
              </td>
              <td>
                {{advertiseInfo.advertisementName}}
              </td>
              <td>
                {{advertiseInfo.advertisementType == '1' ? '视频' : '图片'}}
              </td>
              <td>
                {{advertiseInfo.advertisementShowTime}}
              </td>
              <td>
                <p class="url" v-my-tooltip.top-center="advertiseInfo.advertisementDownloadUrl">
                  {{advertiseInfo.advertisementDownloadUrl}}</p>
              </td>
              <td>
                {{advertiseSize(advertiseInfo.advertisementSize)}}
              </td>
              <td>
                {{advertiseLevel(advertiseInfo.advertisementLevel)}}
              </td>
              <td>
                <button class="btn bg-purple btn-xs" @click="openForm('修改',index)">修改
                </button>
                <button class="btn btn-danger btn-xs" @click="delete(advertiseInfo)">删除
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--以下是分页-->
        <boot-page :pageTotal='pageTotal' :len='len' :page-len="pageLen"></boot-page>
      </div>
    </div>
    <AdvertiseListForm :formTitle="formTitle" v-on:dismiss="formDismiss" v-if="form"></AdvertiseListForm>
  </div>
</template>

<script>
  import axios from 'axios'
  import AdvertiseListForm from './AdvertiseAdvertiseForm'
  import bootPage from './AdvertiseListBootPage'
  export default {
    name: 'Login',
    data () {
      return {
        form: false,
        formTitle: '',
        advertiseInfos: {},
        len: 10, // 每页有多少条数据
        pageLen: 5, // 最多有多少页显示在下方分页
        pageTotal: 0  // 总页数
      }
    },
    components: {
      bootPage,
      AdvertiseListForm
    },
    watch: {
      page (val) {
        this.formpageupdate(val)
      }
    },
    computed: {
      page () {
        return this.$store.state.adminAdvertise.advertiselistpage
      }
    },
    mounted () {
      let _this = this
      axios.post('http://localhost:9999/advertise/page',
        {
          pageStart: 0,
          pageSize: _this.len
        }
      ).then(function (res) {
        if (res.data) {
          _this.advertiseInfos = res.data.content
          _this.pageTotal = res.data.totalPages
        }
      })
    },
    methods: {
      formpageupdate (page) {
        let _this = this
        axios.post('http://localhost:9999/advertise/page',
          {
            pageStart: page,
            pageSize: _this.len
          }
        ).then(function (res) {
          if (res.data) {
            _this.advertiseInfos = res.data.content
            _this.pageTotal = res.data.totalPages
          }
        })
      },
      refreshData (e) {
        let _this = this
        axios.post('http://localhost:9999/advertise/page',
          {
            pageStart: 0,
            pageSize: _this.len
          }
        ).then(function (res) {
          if (res.data) {
            _this.advertiseInfos = res.data.content
            _this.pageTotal = res.data.totalPages
          }
        })
      },
      formDismiss () {
        this.form = false
      },
      openForm (info, index) {
        if (info === '新建') {
          this.formTitle = '新建广告'
          if (this.form === false) {
            this.form = true
          } else {
            this.form = false
          }
        } else if (info === '修改') {
          this.formTitle = '修改广告'
          if (this.form === false) {
            this.form = true
          } else {
            this.form = false
          }
        }
      },
      advertiseSize (size) {
        if (size > 1000000) {
          return (size / 1000.0 / 1000.0).toFixed(2) + 'MB'
        }
        return (size / 1000.0).toFixed(2) + 'KB'
      },
      advertiseLevel (level) {
        if (level === 11) {
          return '初始广告'
        } else if (level === 12) {
          return '默认广告'
        } else if (level === 13) {
          return '轮播广告'
        } else {
          return level
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .url {
    width: 16em;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    cursor: help;
  }
</style>
