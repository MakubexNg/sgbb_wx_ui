Component({
  properties: {
    tabList: Array
  },
  data: {
    select: 0
  },
  methods: {
    // tab菜单切换
    selectTab(e) {
      const { id } = e.currentTarget.dataset;
      this.setData({
        select: id,
      })
    },
  }
})