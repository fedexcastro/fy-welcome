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

    $("#left-top-img").animate({bottom: "0"}, 2000);
    $("#left-bottom-img").animate({top: "0"}, 2000);
    $("#right-top-img").animate({bottom: "0"}, 2000);
    $("#right-bottom-img").animate({top: "0"}, 2000);

    setTimeout(function(){
        $("#left-top-img").animate({right: "300%"}, 2000);
        $("#left-bottom-img").animate({right: "300%"}, 2000);
        $("#right-top-img").animate({left: "300%"}, 2000);
        $("#right-bottom-img").animate({left: "300%"}, 2000);
    }, 5000);

    setTimeout(function(){
        $('#left-product-link').remove();
        $('#right-product-link').remove();
    }, 7000);
}

$(function(){animate(); setInterval(animate, 8000);});

