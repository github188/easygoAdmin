<template>
  <MachineMachineList></MachineMachineList>
</template>

<script>
  import MachineMachineList from '../../components/machine/MachineMachineList'
  export default{
    name: 'MachineList',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      MachineMachineList
    }
  }
</script>

<style lang="scss">
</style>
