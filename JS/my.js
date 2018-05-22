  //
  var WHeight = $(window).height();
    var WWidth = $(window).width();
    $(".door-top,.door-bottom").css("height",WHeight/2);
    $("#making").css("top",WHeight/2-100).css("left",WWidth/2-150);
  //随鼠标晃动
var myleft = [];
    var mytop = [];
    for(var i=1;i<=$("#huangdong").children().length;i++){
        myleft.push($("#huangdong"+i).css("left").substr(0,$("#huangdong"+i).css("left").length-2));
        mytop.push($("#huangdong"+i).css("top").substr(0,$("#huangdong"+i).css("top").length-2));
    }console.log(myleft[0]);
  $('body').on('mousemove', function(e) {
    //公式
    //console.log("here")
    var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight - 0.5;
    var _left = -100 * offsetX;    //如果想动的幅度更大，可以调整 -40 的值
    var _top = -100 * offsetY;     //如果想动的幅度更大，可以调整 -40 的值
    //应用公式
    //console.log(parseFloat(myleft[0])+_left*0.3);
    $('#huangdong1').css('left',parseFloat(myleft[0])+_left*1).css('top',parseFloat(mytop[0])+_top*1);  //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
    $('#huangdong2').css('left',parseFloat(myleft[1])+_left*1.1).css('top',parseFloat(mytop[1])+_top*1.1); //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
    $('#huangdong3').css('left',parseFloat(myleft[2])+_left*1.2).css('top',parseFloat(mytop[2])+_top*1.2); //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
    $('#huangdong4').css('left',parseFloat(myleft[3])+_left*1.3).css('top',parseFloat(mytop[3])+_top*1.3); //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
    $('#huangdong5').css('left',parseFloat(myleft[4])+_left*1.4).css('top',parseFloat(mytop[4])+_top*1.4); //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
  });
  //模糊
        var opacity1;
        var opacity2;
  $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if (st<=WHeight) {
            st = st/WHeight;
            opacity1 = 1-(st);
            opacity2 = ((st+0.6)<1?"1":(1-st*st*st));
            //console.log(st);
            //console.log(opacity2);
            $(".cd-bg-1hu").css("opacity",opacity1);   
            $(".cd-bg-1huhu").css("opacity",opacity2);   
        }else{
            $(".cd-bg-1hu").css("opacity",0);   
            $(".cd-bg-1huhu").css("opacity",0);  
        }
    });