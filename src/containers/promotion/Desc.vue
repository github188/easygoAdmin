<template>
  <div class="row">
    <div class="col-md-12">
      <h3>
        促销描述&nbsp;&nbsp;&nbsp;&nbsp;
      </h3>
    </div>

    <div class="col-md-6">
      <h2>第二瓶半价</h2>

      <p class="text-success">消费者购买指定产品，第一瓶原价，60秒内购买第二瓶，只需支付半价。</p>

      <p>例如:</p>

      <p>消费者购买百事可乐600ml，第一瓶3.5元，60秒内购买第二瓶，只需支付1.75元。</p>
    </div>
    <div class="col-md-6">
      <h2>抽奖</h2>

      <p class="text-success">微信账号或支付宝账号，购买指定产品九次，第十瓶免单。</p>

      <p>例如:</p>

      <p>微信账号或支付宝账号，购买百事可乐600ml九次，第十瓶支付0.01元。</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'PromotionDesc',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>

<style lang="scss">
</style>
