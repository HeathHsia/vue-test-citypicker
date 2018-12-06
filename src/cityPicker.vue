<template>
    <div style="display: flex;flex-direction: column;position: absolute; width: 100%; height: 100%;z-index: 5;">
      <div style="flex: 9;background: rgba(75, 72, 72, 0.6)" @click.stop="cancelChangeCity" catchtouchstart='' catchtouchmove="handlerMove" ></div>
      <div style="width: 100%;flex: 8;background: #fff;display: flex;flex-direction: column;justify-content: space-between;">
        <div class="bar">
          <div class="bar-span" style="color:rgba(138,138,138,0.72);" @click.stop="cancelChangeCity">取消</div>
          <div class="bar-span" style="color:rgb(26, 173, 25);" @click.stop="regionChangeCity">确定</div>
        </div>
        <picker-view :data-city="addressCode" :data-province="provinceCode" indicator-style="height: 68rpx;" style="width: 100%;height:220px;bottom: 0;"
          :value="value" @change="bindChange">
          <picker-view-column>
            <div v-for="(item, index) in provinces" :key="index" style="line-height: 34px;font-size:29rpx;text-align: center;color: black;">{{item.ProvinceName}}</div>
          </picker-view-column>
          <picker-view-column >
            <div v-for="(item,index) in citys" :key="index" style="line-height: 34px;font-size:29rpx;text-align: center;color: black;">{{item.CityName}}</div>
          </picker-view-column>
        </picker-view>
      </div>
    </div>
</template>

<script>
var cityProvinceCode = require('../utils/cityProvinceCode.js')

const citys = []
export default {
  data () {
    return {
      citys: citys,
      value: [0, 0],
      city: '',
      province: '',
      provinceIndex: 0,
      provinceCode: ''
    }
  },
  name: 'citypicker',
  props: ['addressCode', 'provinces'],
  mounted () {
    var cityid = this.addressCode.toString()
    var code = cityid.substring(0, 2) + '0000'
    code = code === '0000' ? this.provinces[0].ProvinceId : code
    var provinceIndex = cityProvinceCode.getProvinceIndex(code)
    var cityIndex = this.addressCode === '' ? 0 : cityProvinceCode.getCityIndex(code, cityid)
    this.provinceCode = code
    this.citys = cityProvinceCode.city[code]
    this.province = this.provinces[provinceIndex]
    this.city = cityProvinceCode.city[code][cityIndex]
    this.provinceIndex = provinceIndex
    this.value = [provinceIndex, cityIndex]
  },
  methods: {
    regionChangeCity: function () {
      this.$emit('regionChange', {
        value: [this.province.ProvinceName, this.city.CityName]
      }, {})
    },
    cancelChangeCity: function () {
      console.log('cancelchange')
      this.$emit('cancelChange', {}, {})
    },
    bindChange: function (e) {
      console.log(e)
      const val = e.mp.detail.value
      var province = this.provinces[val[0]]
      var citys = cityProvinceCode.city[province.ProvinceId]
      if (this.provinceIndex !== val[0]) {
        this.provinceIndex = val[0]
        this.province = province
        this.citys = citys
        this.value = [val[0], 0]
        this.city = citys[0]
      } else {
        this.city = this.citys[val[1]]
        this.value = [val[0], val[1]]
      }
    }
  }
}
</script>

<style>
.bar{
  display:flex;
  border-bottom:1px solid #EEEEEE;
  justify-content: space-between;
}
.bar-span{
  font-size: 17px;
  line-height: 45px;
  padding-left:15px;
  padding-right:15px;

}
</style>
