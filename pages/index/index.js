
Page({

  data: {
    images : [// 准备展示的图片
      { url: "../../images/4.jpg", height: 313, width: 500 },
      { url: "../../images/5.jpeg", height: 2560, width: 1440 },
      { url: "../../images/6.jpeg", height: 1216, width: 700 },
      { url: "../../images/1.jpg", height: 1200, width: 1920 },
      { url: "../../images/2.jpg", height: 1200, width: 1920 },
      { url: "../../images/3.jpg", height: 300, width: 533 },
    ],
    leftShowImages : [],// 左边已经展示的图片
    rightShowImages: [],// 右边已经展示的图片
    leftHeight : 0,
    rightHeight : 0,
    index : 0// 已经加载图片的索引
  },

  onLoad: function () {
    var length = this.data.images.length
    for (var i = 0; i < length; i++) {
      this.loadImage(this)
    }
  },

  loadImage : function (that) {
    var leftHeight = this.data.leftHeight// 左容器高度
    var rightHeight = this.data.rightHeight// 右容器高度
    var index = this.data.index// 加载图片的索引
    var images = this.data.images// 总共要加载的图片

    var min = Math.min(leftHeight, rightHeight)// 计算左右容器高度的最小值
    // 添加要新加载的图
    if (min == leftHeight) {
      var leftShowImages = this.data.leftShowImages
      leftShowImages.push(images[index])
      that.setData({
        leftShowImages: leftShowImages
      })

      // 获取图片高度
      leftHeight += images[index].height

      // console.log("左高度" + leftHeight)

    } else {
      var rightShowImages = this.data.rightShowImages
      rightShowImages.push(images[index])
      that.setData({
        rightShowImages: rightShowImages
      })

      // 获取图片高度
      rightHeight += images[index].height

      // console.log("右高度" + rightHeight)

    }

    // 索引加1
    index++;
    that.setData({
      index : index,
      leftHeight : leftHeight,
      rightHeight : rightHeight
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      index : 0
    })

    var length = this.data.images.length
    for (var i = 0; i < length; i++) {
      this.loadImage(this)
    }
  },

})
