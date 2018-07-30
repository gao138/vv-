//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotList:['1','2'],
    footerList:['1','2','3','4']
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
  }
})
