// components/banner/banner.js
Component({
  properties: {
    backgroundArr: {
      type: Array
    },
    imgHeight: {
      type: Number
    }
  },
  data: {
    // 焦点图的当前值
    activeNum: 0,
    autoplay: false,
    interval: 3000,
  },
  methods: {
    changeFn(e){
      // 获得当前是第几张图在显示
      // console.log(e.detail.current)
      this.setData({
        activeNum: e.detail.current
      })
    }
  }
})