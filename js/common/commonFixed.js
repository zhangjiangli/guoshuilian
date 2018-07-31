$(function () {
    //导入头部底部
    $('#myheader').load('otherHeader.html', function () {

    })
    $('#myfooter').load('footer.html', function () {

    })
    //咨询客服的内容显示与隐藏
    $(".service").on("mouseover", function () {
        $(".service_info").css("visibility", "visible")
    })
    $(".service_con").on("mouseleave", function () {
        $(".service_info").css("visibility", "hidden")
    })
    //回到顶部
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop()
        if (scrollTop > 500) {
            $(".goTop").fadeIn(500)

        } else {
            $(".goTop").fadeOut(500)
        }
    })
    $(".goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "fast");
    })

})