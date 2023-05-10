Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    background: ['../../images/banner1.jpg', '../../images/banner2.jpeg'],
    // tab菜单
    tabList: ['求助大厅', '服务大厅'],
    // 选中tab菜单
    select: 0,
    list: [
      {
        image: "../../images/banner1.jpg",
        title: "帮忙找钥匙",
        region: "文化山庄门口",
        date: "5月1日",
        desc: "在一个月黑风高的晚上,我丢掉了一把钥匙,就在文化山庄门口",
        publish_time: "2022年10月7日"
      },
      {
        image: "../../images/banner1.jpg",
        title: "帮忙找钥匙",
        region: "文化山庄门口",
        date: "5月1日",
        desc: "在一个月黑风高的晚上,我丢掉了一把钥匙,就在文化山庄门口",
        publish_time: "2022年10月7日"
      },
      {
        image: "../../images/banner1.jpg",
        title: "帮忙找钥匙",
        region: "文化山庄门口",
        date: "5月1日",
        desc: "在一个月黑风高的晚上,我丢掉了一把钥匙,就在文化山庄门口",
        publish_time: "2022年10月7日"
      },
    ]
  },
  toSearch() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toDetail() {
    wx.navigateTo({
      url: '../infoDetail/infoDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        select: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        select: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})