/**
 * 新增用户
 * Created by jinshiyan on 2016/8/10.
 */
function adduser(){
    var addCount = 0;
    $("#add-confirm").click(function(){
        addCount ++;
        var id = "add"+addCount;
        var loginName = $("#add-loginName").val();
        var name = $("#add-name").val();
        var telephone = $("#add-telephone").val();
        var date = new Date();
        var registerTime = date.toLocaleDateString().replace(/\//g,"-");
        var lastLoginTime = date.toLocaleString().replace(/\//g,"-");
        var html = "<tr id='"+id+"'>";
        html += "<td>"+loginName+"</td><td>"+name+
            "</td><td>"+telephone+"</td><td>"+registerTime+"</td>" +
            "<td>"+lastLoginTime+"</td><td>" +
            "<a href='#' data-toggle='modal' data-target='#modify'" +
            "onclick='modify("+'"'+id+'"'+")'>修改</a>" +
            "<a href='#' data-toggle='modal' data-target='#delete'" +
            "onclick='deleteuser("+'"'+id+'"'+")'>删除</a>" +
            "<a href='#' data-toggle='modal' data-target='#resetPassword'>重置密码</a>"+
            "</td></tr>"
        $("#title").after(html);
    })
}