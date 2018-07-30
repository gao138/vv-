//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotList:['1','2'],
    footerList:['1','2','3','4'],
    globalData: {
      
    }
  },
  onLoad: function () {
   
  },
  //事件处理函数
  toMine:function(){
    wx.navigateTo({
      url: '../mine/mine?a=1'
    })
  },
  toDetails:function(){
    wx.navigateTo({
      url: '../details/details?b=1'
    })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      // 模拟请求数据，并渲染
     
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 3000);
  }
})
