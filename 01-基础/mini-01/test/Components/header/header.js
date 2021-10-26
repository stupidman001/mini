// Components/header/header.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      iconType:{
        type:String,
        value:''
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
        name:"卡片头部"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        fun(){
            wx.showModal({
                title: '提示',
                content: '这是一个模态弹窗',
                success (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
        }
    }
})
