//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {"id":1,"url":"/pages/images/1.jpg"},
      { "id": 2, "url": "/pages/images/2.jpg" },
      { "id": 3, "url": "/pages/images/3.jpg" },
      { "id": 4, "url": "/pages/images/4.jpg" },
    ],
    goodsList:[
      { "id": 1, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":1999.99,"stock":999},
      { "id": 2, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":1999.99,"stock":999},
      { "id": 3, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":1999.99,"stock":999},
      { "id": 4, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":1999.99,"stock":999},
      { "id": 5, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":1999.99,"stock":999},
      { "id": 6, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":199.99,"stock":999},
      { "id": 7, "image":"/pages/images/1-7.jpeg","name":"商品名称","price":199.99,"stock":99},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    
  },

})
