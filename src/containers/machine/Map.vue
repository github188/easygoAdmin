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
                @zoomend="syncZoom"
                @click="mapviewinit"
                :style="{ height: mapviewHeight + 'px'}">>

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
          lat: 28.136449
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
    computed: {
      mapviewHeight () {
        if (window.screen < 768) {
          let height = window.screen.height * 1.46
          return height
        } else {
          let height = window.screen.height * 0.8
          return height
        }
      }
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
      mapviewinit () {
        // this.infoWindow.show = false
      },
      marker (index) {
        let _this = this
        axios.get('http://api.map.baidu.com/geocoder/v2/', {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          params: {
            location: _this.machinemaps[index].locationLatitude + ',' + _this.machinemaps[index].locationLongitude,
            output: 'json',
            pois: 1,
            ak: 'zYXlh8Vw8MzRKp3H6qRvQeqCYMMSrxby'
          }
        }).then(function (res) {
          console.log(res)
        })
        // axios.get('http://localhost:9999/api/map', {
        //   params: {
        //     lng: _this.machinemaps[index].locationLongitude,
        //     lat: _this.machinemaps[index].locationLatitude
        //   }
        // }).then(function (res) {
        //   console.log(res)
        // })
        _this.infoWindow.machineCode = _this.machinemaps[index].machineCode

        _this.infoWindow.show = true
        _this.infoWindow.address = 'wori'
        _this.center = {
          lng: _this.machinemaps[index].locationLongitude,
          lat: _this.machinemaps[index].locationLatitude
        }
        _this.infowindowposition = {
          lng: _this.machinemaps[index].locationLongitude,
          lat: _this.machinemaps[index].locationLatitude
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
  }

  .copyrightoffset {
    margin: 10px;
  }
</style>
