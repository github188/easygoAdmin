<template>
  <li>
 <span @click="toggle">
 <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
 <i v-if="!isFolder" class="icon file-text"></i>
 {{ model.orgName }}
 </span>
    <ul v-show="open" v-if="isFolder">
      <MachineListOrg v-for="item in model.childrens" :model="item"></MachineListOrg>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'MachineListOrg',
    props: ['model'],
    data () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.childrens && this.model.childrens.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  ul {
    list-style: none;
    margin-left: 20px;
    padding: 0;
    list-style: none;
    border: none;
    overflow: hidden;
  }
  span{
    line-height: 24px;
  }
  i.icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  .icon.folder {
    background-image: url(/static/images/folder-closed.png);
  }

  .icon.folder-open {
    background-image: url(/static/images/folder.png);
  }

  .icon.file-text {
    background-image: url(/static/images/file.png);
  }

  .tree-menu li {
    line-height: 1.5;
  }

</style>
