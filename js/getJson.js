/**
 * 获取json数据，并分页显示在页面上
 * Created by jinshiyan on 2016/8/10.
 */
function getJson(){
    $.ajax({
        type: "POST",
        url: "../data.json",
        dataType: "json",
        success: function (data) {
           // console.log(data)
            getJsonData(data);
            page();
            setId();
        }
    });
    adduser();
}
/*获取json数据，并分页显示*/
function getJsonData(data) {
    new Vue({
        el:"#jsonTip",
        data:{
            items:data
        }
    })
}
 function setId(){
    var $tr = $("tr");
    for(var i=1;i<$tr.length;i++){
        $tr.eq(i).attr("id","user"+i)
    }
}
/*
function getJsonData(data){

    var totalCounts = data.length;//总数据量
    var pageSize = 10;//每页显示数据条数
    var max = Math.ceil(totalCounts / pageSize);//总页数
    var currentPage = 1;//当前页数

    page(currentPage,max);/*分页显示*/
    /*display(currentPage,pageSize,data);/*默认显示第一页数据*/

    /*点击首页按钮，显示第一页数据*/
   /* $(".first").click(function(){
        currentPage = 1; //当前页
        $("#jsonTip").empty();//将表格数据清空
        display(currentPage,pageSize,data);//显示当前页数据
    })

    /*点击上一页按钮，显示当前页的前一页数据*/
   /* $(".previous").click(function(){
        currentPage -= 1;
        $("#jsonTip").empty();
        display(currentPage,pageSize,data);
    })

    /* 点击下一页按钮，显示当前页的后一页数据*/
   /* $(".next").click(function(){
        currentPage += 1;
        $("#jsonTip").empty();
        display(currentPage,pageSize,data);
    })

    /*点击尾页按钮，显示最后一页数据*/
   /* $(".last").click(function(){
        currentPage = max;
        $("#jsonTip").empty();
        display(currentPage,pageSize,data);
    })
}

/*为表格填充数据*/
/*function display(currentPage,pageSize,data){
    var start = (currentPage -1 ) * pageSize; //数据开始索引
    var end = start + pageSize; //数据结束索引
    var html="<table class='table-bordered'><tr id='title'>" +
        "<th>登录名</th><th>姓名</th><th>联系方式</th>" +
        "<th>注册时间</th><th>上次登录时间</th><th>操作</th></tr>";
    //i表示在data中的索引位置，n表示包含的信息的对象
    $.each(data,function(i,n){
        if(i>=start && i<end){
            /*显示当前范围内的数据*/
           /* html+="<tr id='user"+i+"'><td>"+n["loginName"]+"</td>";
            html+="<td>"+n["name"]+"</td>";
            html+="<td>"+n["telephone"]+"</td>";
            html+="<td>"+n["registerTime"]+"</td>";
            html+="<td>"+n["lastLogin"]+"</td>";
            html+="<td>" +
                "<a href='#' data-toggle='modal' data-target='#modify'onclick='modify("+i+")'>修改</a>" +
                "<a href='#' data-toggle='modal' data-target='#delete' onclick='deleteuser("+i+")'>删除</a>" +
                "<a href='#' data-toggle='modal' data-target='#resetPassword'>重置密码</a>" +
                "</td>";
        }
    })
    html+="</table>";
    $('#jsonTip').append(html);
}
/*
/!*页码*!/
function page(currentPage,max) {
    $('.pagination').jqPagination({
        link_string : '${pageContext.request.contextPath}/widget/getForm'+'/?page={page_number}',
        current_page: currentPage, //设置当前页 默认为1
        max_page : max, //设置最大页 默认为1
        page_string : '当前第{current_page}页,共{max_page}页'
    });
}*/
