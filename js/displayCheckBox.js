/**
 * 控制筛选框的显示
 * Created by jinshiyan on 2016/8/7.
 */
function display(event,className){
    $("."+className).css("display","block");
    event.stopPropagation();//防止冒泡
    removeBox(className);
}
function removeBox(className){
    /*$(document).click(function(){
        $("."+className).css("display","none");
    })*/
    $(document).bind('click', function(e) {
        var e = e || window.event; //浏览器兼容性
        var elem = e.target || e.srcElement;
        while (elem) {
            //循环判断至跟节点，防止点击的是div子元素
            if (elem.className && elem.className == className) {
                return;
            }
            elem = elem.parentNode;
        }
        $('.'+className).css('display', 'none'); //点击的不是div或其子元素
    });
}