/**
 * 修改密码验证
 * Created by jinshiyan on 2016/8/8.
 */
function keyUP(event){
    var flag = isEmpty();
    if(flag){
        $(".modal-footer button").attr("disabled",false);
        $(".modal-footer button").addClass("add-confirm");

    }else{
        $(".modal-footer button").removeClass("add-confirm");
        $(".modal-footer button").attr("disabled",true);
    }
}
function  validate() {
    var flag = isEmpty();
    if(flag) {
        if ($("#newPassword").val() != $("#confirmPassword").val()) {
            $("#promoted").html("两次输入的密码不同");
        }else{
            $("#promoted").html("");
        }
    }
}
function isEmpty(){
    var flag = true;//是否全部输入  默认true
    $(".modal-body input").each(function (){
        if($(this).val()==""){//有空输入，将flag置为false
            flag = false;//
        }
    });
    return flag;
}