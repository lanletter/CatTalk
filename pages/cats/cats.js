//必须用相对路径
var postsData = require('../../data/posts-data.js')

Page({
    data: {
        //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
        //而这个动作A的执行，是在onLoad事件执行之后发生的
        
    },

    onLoad: function (options) {
        //页面初始化，options为页面跳转所带来的参数
        this.setData({ postList_key: postsData.postList });
    },

    onMusicTap: function (event) {
        var postId = event.currentTarget.dataset.postid;
        var isPlayingMusic=this.data.isPlayingMusic;
        wx.playBackgroundAudio({
            dataUrl:postsData.postList[postId].music.url ,
            title:postsData.postList[postId].music.title,            
        })

        // if(isPlayingMusic){
        //     wx.stopBackgroundAudio();
        //     this.setData({
        //         isPlayingMusic:false
        //     })
        // }else{
        //     wx.playBackgroundAudio({
        //       dataUrl:postsData.postList[postId].music.url ,
        //       title:postsData.postList[postId].music.title,
        //     })
        //     this.setData({
        //         isPlayingMusic:true
        //     })
        // }
    },

})