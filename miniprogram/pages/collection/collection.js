// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab菜单
    tabList: ['求助', '服务'],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        select: 3
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})