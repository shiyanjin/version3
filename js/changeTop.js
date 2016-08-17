/**
 * Created by jinshiyan on 2016/8/6.
 */
/*显示模态框*/
function showModal() {
    $("#myModal").modal("show");
}
/*改变top导航栏激活项样式*/
function changTopClass(){
    $("#top li").bind("click",function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
    })
}