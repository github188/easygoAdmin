<template>
  <div class="row" id="machine-map">
    <baidu-map>
      <map-view class="map-view"
                :scroll-wheel-zoom="true"
                :inertial-dragging='true'
                :center="center"
                :zoom="zoom"
                :auto-resize="true"
                :min-zoom="minZoom"
                @moving="syncCenter"
                @moveend="syncCenter"
                @zoomend="syncZoom">

        <map-control-copyright
          anchor="BMAP_ANCHOR_TOP_LEFT"
          :copyright="copyright"/>
        <map-control-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
        <map-control-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
        <map-overlay-info-window :position="infowindowposition"
                                 :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
          <MachineMapInfoWindow :machineCode="infoWindow.machineCode"
                                :address="infoWindow.address"></MachineMapInfoWindow>
        </map-overlay-info-window>
        <map-overlay-marker v-for="(machinemap,index) in machinemaps"
                            :point="{lng: machinemap.locationLongitude, lat: machinemap.locationLatitude}"
                            @click="marker(index)"
                            :massClear="false"/>

      </map-view>
    </baidu-map>
  </div>
</template>

<script>
  import axios from 'axios'
  import MachineMapInfoWindow from '../../components/machine/MachineMapInfoWindow'
  export default{
    name: 'MachineMap',
    data () {
      return {
        center: {
          lng: 113.257114,
          lat: 23.136449
        },
        zoom: 6,
        minZoom: 6,
        copyright: [{
          id: 1,
          content: "<h3 class='copyrightoffset'><span class='label label-primary'>设备地图</span></h3>"
        }],
        machinemaps: [],
        infowindowposition: null,
        infoWindow: {
          show: false
        }
      }
    },
    components: {
      MachineMapInfoWindow
    },
    mounted () {
      let _this = this
      axios.get('http://localhost:9999/machine/machinemap').then(function (res) {
        if (res.data) {
          _this.machinemaps = res.data
        }
      })
    },
    beforeUpdated () {
      let _this = this
      _this.machinemaps = []
      axios.get('http://localhost:9999/machine/machinemap').then(function (res) {
        if (res.data) {
          _this.machinemaps = res.data
          console.log(_this.machinemaps)
        }
      })
    },
    watch: {},
    methods: {
      syncCenter (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
      },
      syncZoom (e) {
        this.zoom = e.target.getZoom()
      },
      marker (index) {
        this.infoWindow.machineCode = this.machinemaps[index].machineCode
        this.infoWindow.address = 'wori'
        this.infowindowposition = {
          lng: this.machinemaps[index].locationLongitude,
          lat: this.machinemaps[index].locationLatitude
        }
      },
      infoWindowClose (e) {
        this.infoWindow.show = false
      },
      infoWindowOpen (e) {
        this.infoWindow.show = true
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss">
  .map-view {
    width: 100%;
    height: 730px;
  }

  .copyrightoffset {
    margin: 10px;
  }
</style>
