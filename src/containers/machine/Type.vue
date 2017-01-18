<template>
  <MachineTypeList></MachineTypeList>
</template>

<script>
  import MachineTypeList from '../../components/machine/MachineTypeList'
  export default{
    name: 'MachineType',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      MachineTypeList
    }
  }
</script>

<style lang="scss">
</style>
