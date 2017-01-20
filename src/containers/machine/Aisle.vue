<template>
  <MachineAisleTemplateList></MachineAisleTemplateList>
</template>

<script>
  import MachineAisleTemplateList from '../../components/machine/MachineAisleTemplateList'
  export default{
    name: 'MachineAisle',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      MachineAisleTemplateList
    }
  }
</script>

<style lang="scss">
</style>
