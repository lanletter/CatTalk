Page({
    onTap:function(event){
        wx.navigateTo({
          url: "../cats/cats"
        })
    },

    onShareAppMessage: function () {
        return {
        title: '微信小程序·喵语言',
        desc: '一群话痨的喵星人等你来撩～！',
        path: '/pages/welcome/welcome',
        success: function(res) {
            shareAppMessage:ok
        },
        fail: function(res) {
            shareAppMessage:fail
        }
        }
    }
})