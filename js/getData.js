/**
 * 获取json数据，并显示在页面上
 * Created by jinshiyan on 2016/8/11.
 */
function getData(){
    $.ajax({
        type: "POST",
        url: "../troubleMessage.json",
        dataType: "json",
        success: function (data) {
           // console.log(data)
            console.log(data);
            createVue(data);
            page();
        }
    });
}
function createVue(data) {

    //console.log(data)

    //console.log(data)
    new Vue({
        el:"#trouble-message",
        data:{
            todos:data
        }
    })
}