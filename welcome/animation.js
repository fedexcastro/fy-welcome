var menProducts = [
    {img1: 'welcome/img-products/fy-female-1.png',
        img2: 'welcome/img-products/fy-female-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/crest-1.png',
        img2: 'welcome/img-products/crest-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/musc-1.png',
        img2: 'welcome/img-products/musc-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/reignac-1.png',
        img2: 'welcome/img-products/reignac-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
];

var womenProducts = [
    {img1: 'welcome/img-products/fy-man-1.png',
        img2: 'welcome/img-products/fy-man-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/laders-1.png',
        img2: 'welcome/img-products/laders-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/meander-1.png',
        img2: 'welcome/img-products/meander-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
    {img1: 'welcome/img-products/vaals-1.png',
        img2: 'welcome/img-products/vaals-2.png',
        href: 'http://forgetyesterday.com.ar/store'
    },
];
function animate (){
    var leftSlider = $('#img-block-1');
    var rightSlider = $('#img-block-2');

    var leftItem = menProducts[Math.floor(Math.random()*menProducts.length)];
    var rightItem = womenProducts[Math.floor(Math.random()*womenProducts.length)];

    leftSlider.append('<a id="left-product-link" href="' + leftItem.href + '"><img  src="' + leftItem.img1 + '" class="img-top img-responsive" id="left-top-img">' + '<img src="' + leftItem.img2 + '" class="img-bottom img-responsive" id="left-bottom-img">'+'</a>');
    rightSlider.append('<a id="right-product-link" href="' + rightItem.href + '"><img src="' + rightItem.img1 + '" class="img-top img-responsive" id="right-top-img">' + '<img src="' + rightItem.img2 + '" class="img-bottom img-responsive" id="right-bottom-img">'+'</a>');

    var timerVertical = 2000;
    var timerHorizontal = 2000;
    $("#left-top-img").animate({bottom: "0"}, timerVertical);
    $("#left-bottom-img").animate({top: "0"}, timerVertical);
    $("#right-top-img").animate({bottom: "0"}, timerVertical);
    $("#right-bottom-img").animate({top: "0"}, timerVertical);

    setTimeout(function(){
        $("#left-top-img").animate({right: "400%"}, timerHorizontal);
        $("#left-bottom-img").animate({right: "400%"}, timerHorizontal);
        $("#right-top-img").animate({left: "400%"}, timerHorizontal);
        $("#right-bottom-img").animate({left: "400%"}, timerHorizontal);
    }, 3000);

    setTimeout(function(){
        $('#left-product-link').remove();
        $('#right-product-link').remove();
    }, 3800);
}

$(function(){animate(); setInterval(animate, 3900);});

