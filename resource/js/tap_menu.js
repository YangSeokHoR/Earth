$(document).ready(function () {
    
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab_content").removeClass("current");
    $(".introduce_section2_content2").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
    $("#icon" + tab_id).addClass("current");

    $("#" + tab_id).slick("unslick").slick({dots: true,
      infinite: true,
      speed: 500,
      fade: true,});
  });
});