/**
 * 删除确认  删除成功
 * Created by jinshiyan on 2016/8/7.
 */
/*$(document).ready(function () {

})*/
function deleteSuccess() {
    $(document).click(function () {
        //当点击页面中其他地方时，显示确认删除框
        $(".modal-content-delete").css("display","block");
        $(".delete-success").css("display","none");
    })
    $("#delete-confirm").click(function (event) {
        $(".modal-content-delete").css("display","none");
        $(".delete-success").css("display","block");
        event.stopPropagation();//阻止事件冒泡
    })
}