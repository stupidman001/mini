import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航 数组
    catesList:[],
    // 楼层数据
    floorList:[]
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({ url: "/home/swiperdata" })
    .then(result => {
      console.log(result)
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取 分类导航数据
  getCateList(){
    request({ url: "/home/catitems" })
    .then(result => {
      console.log(result)
      this.setData({
        catesList: result
      })
    })
  },
  // 获取 楼层数据()
  getFloorList(){
    request({ url: "/home/floordata" })
    .then(result => {
      console.log(result)
      this.setData({
        floorList: result
      })
    })
  }
})