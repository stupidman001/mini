App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 1 应用第一次启动的就会触发的事件,获取用户的个人信息 
   */
  onLaunch: function () {
    
  },
  /**
   * 当小程序启动，或从后台进入前台显示(应用 被用户看到)，会触发 onShow
   */
  onShow: function (options) {

  },
  /**
   * 当小程序从前台进入后台( 应用 被隐藏了 )，会触发 onHide
   */
  onHide: function () {
    // 暂停或者清除定时器 
  },
  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
       // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送后台去
  }
})
