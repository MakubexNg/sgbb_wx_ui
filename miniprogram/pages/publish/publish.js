// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //展示的倆列数据源
    multiArray: [
      ['帮我取', '帮我买', '帮我送', "帮我做", "帮我找", "一起", "其他"],
      ['快递', '商品', '菜', '什么', '车']
    ],
    //第二列的储备数据源
    pickerList: [
      ['快递', '商品', '菜', '车'],
      ['水果', '风扇', '饮料', '零食'],
      ['礼物', '蛋糕', '饭', '钥匙'],
      ['遛狗', '家务', '手工', '乐高'],
      ['钥匙', '手机', '电脑', '袋子'],
      ['玩游戏', '打篮球', '打桌球', '逛街'],
      ['想一想', '还有', '什么', '东西']
    ],
    multiIndex: [0, 0],
    select: false,
    name: '',
    date: '',
    region: '',
    phone: '',
    desc: '',
    imgList: [],
    type: ''
  },
  backPage() {
    //wx.navigateBack();
    wx.switchTab({
      url: '../index/index',
    })
  },
  selectType(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      type: id
    })
  },
  deleteImg(e) {
    let { index } = e.currentTarget.dataset;
    let { imgList } = this.data;
    imgList.splice(index, 1);
    this.setData({
      imgList
    })
  },
  uploadImg() {
    let { imgList } = this.data;
    wx.chooseMedia({
      count: 6 - imgList.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const { tempFiles } = res;
        tempFiles.forEach(item => {
          imgList.unshift(item.tempFilePath)
        })

        this.setData({
          imgList
        })
      }
    })
  },
  deleteDesc() {
    this.setData({
      desc: ''
    })
  },
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getDate(e) {
    this.setData({
      date: e.detail.value
    })
  },
  getRegion(e) {
    this.setData({
      region: e.detail.value
    })
  },
  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getDesc(e) {
    this.setData({//不想去空格就去掉trim方法
      desc: e.detail.value.trim()
    })
  },
  closeSelect() {
    this.setData({
      select: false,
      multiIndex: [0, 0]
    })
  },
  bindMultiPickerChange() {
    this.setData({
      select: true
    })
  },
  bindMultiPickerColumnChange(e) {
    let { column, value } = e.detail;
    let data = this.data;
    let { multiArray, pickerList } = this.data;
    if (column === 0) {
      //替换展示的数据源
      multiArray[1] = pickerList[value];
    }
    data.multiArray = multiArray;
    data.multiIndex[column] = value;
    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //发布页自动读取信息中的手机号,按需开启
    // const userInfo = wx.getStorageSync('userInfo');
    // if (userInfo && userInfo.phone) {
    //   this.setData({
    //     phone: userInfo.phone
    //   })
    // }
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