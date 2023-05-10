Component({
  data: {
    select: 0,
    "list": [
      {
        iconPath: "/images/home.png",
        pagePath: "/pages/index/index",
        selectedIconPath: "/images/home-select.png",
        text: "首页",
        type: 0
      },
      {
        iconPath: "/images/all.png",
        pagePath: "/pages/classify/classify",
        selectedIconPath: "/images/all-select.png",
        text: "分类",
        type: 0
      },
      {
        type: 1,
        pagePath: "/pages/publish/publish",
      },
      {
        iconPath: "/images/favorites.png",
        pagePath: "/pages/collection/collection",
        selectedIconPath: "/images/favorites-select.png",
        text: "收藏夹",
        type: 0
      },
      {
        iconPath: "/images/my.png",
        pagePath: "/pages/my/my",
        selectedIconPath: "/images/my-select.png",
        text: "我的",
        type: 0
      }
    ]
  },

  methods: {
    selectPage(e) {
      const { index, page, type } = e.currentTarget.dataset;
      if (index !== this.data.select && type === 0) {
        wx.switchTab({
          url: page,
        })
      } else {
        wx.navigateTo({
          url: page,
        })
      }
    },
  }
})