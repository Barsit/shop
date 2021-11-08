// components/product/product.js
Component({
  properties: {
    showArr: {
      type: Array
    }
  },
  // 组件的事件要写在methods中
  methods: {
    eventFn(){
      // 子传父triggerEvent
      this.triggerEvent("fatherEvent", "你好世界")
    }
  }
})