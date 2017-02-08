<!-- 表格分页组件 -->
<template>
  <div class="row text-center">
    <nav class="boot-nav">
      <ul class="pagination boot-page">
        <li>
          <a href="javascript:void(0)" aria-label="Previous" @click="onFirstClick">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" aria-label="Previous" @click="onPrevClick">
            <span aria-hidden="true">‹</span>
          </a>
        </li>
        <li v-for="(page, index) in pages" :class="activeNum === index ? 'active' : ''">
          <a href="javascript:void(0)" :data-index='index' :data-page='page' @click="onPageClick">{{page}}</a>
        </li>
        <li>
          <a href="javascript:void(0)" aria-label="Next" @click="onNextClick">
            <span aria-hidden="true">›</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" aria-label="Next" @click="onLastClick">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <div class="page-total">
        共 <span>{{pageTotal}}</span> 页
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'MachineListBootPage',
    props: ['pageTotal', 'len', 'pageLen'],
    data () {
      return {
        activeNum: 0,
        page: 1,
        prevdisabled: true
      }
    },
    computed: {
      pages () {
        if (this.pageTotal === 0) {
          return [1]
        } else if (this.pageTotal === 1) {
          return [1]
        } else if (this.pageTotal === 2) {
          return [1, 2]
        } else if (this.pageTotal === 3) {
          return [1, 2, 3]
        } else if (this.pageTotal === 4) {
          return [1, 2, 3, 4]
        } else if (this.pageTotal >= 5) {
          if (this.page <= 2) {
            return [1, 2, 3, 4, 5]
          } else if (this.page > 2 && this.page < this.pageTotal - 2) {
            return [this.page - 2, this.page - 1, this.page, this.page + 1, this.page + 2]
          } else if (this.page > this.pageTotal - 3) {
            return [this.pageTotal - 4, this.pageTotal - 3, this.pageTotal - 2, this.pageTotal - 1, this.pageTotal]
          }
        }
      }
    },
    watch: {
      'page' (val) {
        if (this.pageTotal === 0) {
          this.pages = [1]
        } else if (this.pageTotal === 1) {
          this.pages = [1]
        } else if (this.pageTotal === 2) {
          this.pages = [1, 2]
        } else if (this.pageTotal === 3) {
          this.pages = [1, 2, 3]
        } else if (this.pageTotal === 4) {
          this.pages = [1, 2, 3, 4]
        } else if (this.pageTotal >= 5) {
          if (val <= 2) {
            this.pages = [1, 2, 3, 4, 5]
          } else if (val > 2 && val < this.pageTotal - 2) {
            this.pages = [val - 2, val - 1, val, val + 1, val + 2]
          } else if (val > this.pageTotal - 3) {
            this.pages = [this.pageTotal - 4, this.pageTotal - 3, this.pageTotal - 2, this.pageTotal - 1, this.pageTotal]
          }
        }
      }
    },
    methods: {
      // 点击页码刷新数据
      onPageClick (e) {
        this.page = parseInt(e.target.dataset.page)
        if (this.pageTotal === 0) {
          this.activeNum = parseInt(e.target.dataset.index)
        } else if (this.pageTotal === 1) {
          this.activeNum = parseInt(e.target.dataset.index)
        } else if (this.pageTotal === 2) {
          this.activeNum = parseInt(e.target.dataset.index)
        } else if (this.pageTotal === 3) {
          this.activeNum = parseInt(e.target.dataset.index)
        } else if (this.pageTotal === 4) {
          this.activeNum = parseInt(e.target.dataset.index)
        } else if (this.pageTotal >= 5) {
          if (this.page <= 2 && this.page > 0) {
            this.activeNum = parseInt(e.target.dataset.index)
          } else if (this.page > 2 && this.page <= this.pageTotal - 2) {
            this.activeNum = 2
          } else if (this.page > this.pageTotal - 2 && this.page <= this.pageTotal) {
            if (this.page === this.pageTotal) {
              this.activeNum = 4
            } else if (this.page === this.pageTotal - 1) {
              this.activeNum = 3
            }
          }
        }
        this.pageupdate(this.page)
      },
      // 上一页
      onPrevClick () {
        if (this.pageTotal === 0) {
          this.page = 1
          this.activeNum = 0
        } else if (this.pageTotal === 1) {
          this.page = 1
          this.activeNum = 0
        } else if (this.pageTotal === 2) {
          if (this.page <= 2 && this.page > 1) {
            this.page = this.page - 1
            this.activeNum = this.activeNum - 1
          }
        } else if (this.pageTotal === 3) {
          if (this.page <= 3 && this.page > 1) {
            this.page = this.page - 1
            this.activeNum = this.activeNum - 1
          }
        } else if (this.pageTotal === 4) {
          if (this.page <= 4 && this.page > 1) {
            this.page = this.page - 1
            this.activeNum = this.activeNum - 1
          }
        } else if (this.pageTotal >= 5) {
          if (this.page <= 3 && this.page > 1) {
            this.page = this.page - 1
            this.activeNum = this.activeNum - 1
          } else if (this.page > 3 && this.page <= this.pageTotal - 2) {
            this.page = this.page - 1
          } else if (this.page > this.pageTotal - 2 && this.page <= this.pageTotal) {
            this.page = this.page - 1
            this.activeNum = this.activeNum - 1
          }
        }
      },
      // 下一页
      onNextClick () {
        if (this.pageTotal === 0) {
          this.page = 1
          this.activeNum = 0
        } else if (this.pageTotal === 1) {
          this.page = 1
          this.activeNum = 0
        } else if (this.pageTotal === 2) {
          if (this.page <= 1 && this.page > 0) {
            this.page = this.page + 1
            this.activeNum = this.activeNum + 1
          }
        } else if (this.pageTotal === 3) {
          if (this.page <= 2 && this.page > 0) {
            this.page = this.page + 1
            this.activeNum = this.activeNum + 1
          }
        } else if (this.pageTotal === 4) {
          if (this.page <= 3 && this.page > 0) {
            this.page = this.page + 1
            this.activeNum = this.activeNum + 1
          }
        } else if (this.pageTotal >= 5) {
          if (this.page <= 2 && this.page > 0) {
            this.page = this.page + 1
            this.activeNum = this.activeNum + 1
          } else if (this.page > 2 && this.page <= this.pageTotal - 3) {
            this.page = this.page + 1
          } else if (this.page > this.pageTotal - 3 && this.page < this.pageTotal) {
            this.page = this.page + 1
            this.activeNum = this.activeNum + 1
          }
        }
      },
      // 第一页
      onFirstClick () {
        this.activeNum = 0
        this.page = 1
      },
      // 最后一页
      onLastClick () {
        if (this.pageTotal === 0) {
          this.activeNum = 0
        } else if (this.pageTotal === 1) {
          this.activeNum = 0
        } else if (this.pageTotal === 2) {
          this.activeNum = 1
        } else if (this.pageTotal === 3) {
          this.activeNum = 2
        } else if (this.pageTotal === 4) {
          this.activeNum = 3
        } else if (this.pageTotal >= 5) {
          this.activeNum = 4
        }
        this.page = this.pageTotal
      },
      pageupdate (page) {
        this.$store.dispatch('machinelistpage', page)
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .boot-select {
    width: 80px;
  }

  .boot-nav {
  }

  .boot-page {
    display: inline-block;
    margin: 20px 0;
    vertical-align: middle;
  }

  .page-total {
    display: inline-block;
    vertical-align: middle;
  }
</style>
