/**
 * 密码修改成功
 * Created by jinshiyan on 2016/8/8.
 */
$(document).ready(function () {
    $(".message-box button").click(function () {
        $(".modify-success").css("display","none");
        $(".modal-content").css("display","block");
    })
    $(".modal-footer #btn-confirm").click(function () {
        $(".modify-success").css("display","block");
        $(".modal-content").css("display","none");
    })
})
