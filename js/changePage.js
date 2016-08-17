/**
 * 改变页码显示样式
 * Created by jinshiyan on 2016/8/6.
 */
function changePage(){
    /*页码状态变化*/
    $("#page .number").bind("click",function () {
        $(this).addClass("active-page");
        $(this).siblings("li").removeClass("active-page");
        var pageNumber = $(this).children("a").html();//获取页码
        //alert(pageNumber)
        /*判断当前页是否为首页、尾页*/
        if(pageNumber==1){
            $("#first").addClass("firstOrLast");
            if($("#last").hasClass("firstOrLast")){
                $("#last").removeClass("firstOrLast");
            }
        }else if(pageNumber==3){
            $("#last").addClass("firstOrLast");
            if($("#first").hasClass("firstOrLast")){
                $("#first").removeClass("firstOrLast");
            }
        }else{
            $("#first").removeClass("firstOrLast");
            $("#last").removeClass("firstOrLast");
        }
    })
}


/*页码*/

function page() {
    $('#page').jqPaginator({
        totalPages: 9,
        visiblePages: 5,
        currentPage: 1,

        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
        onPageChange: function (num) {
            $('#text').html('当前第' + num + '页');
        }
    });

}
/*
function page(currentPage,max) {
    $('.pagination').jqPagination({
        link_string : '${pageContext.request.contextPath}/widget/getForm'+'/?page={page_number}',
        current_page: currentPage, //设置当前页 默认为1
        max_page : max, //设置最大页 默认为1
        page_string : '当前第{current_page}页,共{max_page}页',
    });
}*/

