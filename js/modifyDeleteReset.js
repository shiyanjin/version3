/**
 * Created by jinshiyan on 2016/8/11.
 */
/*修改用户信息*/
function modify(id){
    $("#modify-confirm").click(function(){
        var loginName = $("#modify-loginName").val();
        var name =$("#modify-name").val();
        var telephone = $("#modify-telephone").val();
        var time = new Date();
        var lastLoginTime = time.toLocaleString().replace(/\//g,"-");
        var $user = $("#"+id+" td");
        $user.eq(0).html(loginName);
        $user.eq(1).html(name);
        $user.eq(2).html(telephone);
        $user.eq(4).html(lastLoginTime);
    })
}
/*删除用户*/
function deleteuser(id){
    $("#delete-confirm").click(function(){
        $("#"+id).remove();
    })
    deleteSuccess();//删除成功后恢复确认框样式
}