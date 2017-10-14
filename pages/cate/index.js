// pages/cate/index.js
const CHOOSE_STR = 'scroll'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'scroll0',
    defaultToView: 'scroll0',
    showActive: 'scroll0',
    active:[1,0,0,0],
    curren_active:0,
    local : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var local = []
    wx.createSelectorQuery().selectAll('.right-main').boundingClientRect(function (rects) {
      rects.forEach(function (rect,index) {
        local[index] = rect
      })
      if(local.length > 0){
        //动态赋值
        that.setData({
          local: local
        })
      }
    }).exec()
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 用户滚动列表事件
   */
  listScroll: function(e) {
    var local = this.data.local
    for (var i = local.length - 1; i >= 0; i--) {
      
      if (local[i].top < e.detail.scrollTop +2) {
        var id = i
        var active = this.data.active
        var curren_active = this.data.curren_active //当前选中状态
        active[curren_active] = 0;
        active[id] = 1;
        this.setData({
          toView: e.target.dataset.to,
          curren_active: id,
          active: active,
          defaultToView: local[i].id
        })
        break;
      }
    }
    
  },
  /**
   * 用户点击分类事件
   */
  toView: function(e) {
    console.log(this.data.local)
    var id = e.target.dataset.id
    var active = this.data.active
    var curren_active = this.data.curren_active //当前选中状态
    
    active[curren_active] =0 ;
    active[id] = 1;
    this.setData({
      toView: e.target.dataset.to,
      curren_active: id,
      active: active
    })
  }
})