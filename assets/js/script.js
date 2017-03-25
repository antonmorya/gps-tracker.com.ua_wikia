$(document).ready(function () {

    //Открываем меню (при необходимости) при перезагрузке страницы
    $('.menu-item').each(function () {
        if (($(this).hasClass('active')) && ($(this).children().hasClass('dropdown-toggle'))) {
            $(this).addClass('open');
            return false; // екобходимо согласно документации jQuery по .each
        }
    });

    //Скрипт, раскрывающий многоуровневые меню
    //activate.bs.scrollspy - событие, генерируемое скриптом, следящим за добавлением тега active активному пункту навигации
    //+ код, отодвигающий пункты меню при раскрытии drop-down

    $('.menu-item').on('activate.bs.scrollspy', function () {

        $('.dropdown').each(function () {
            $(this).not('.active').removeClass('open');
            $('.bigpadd').not(this).css('padding-top', '0');
            $('.bigpadd').not(this).removeClass('bigpadd');
        });

        //!!!trouble-code commented
        if ($(this).children().hasClass('dropdown-toggle')) {
            $(this).addClass('open');

            //kод, отодвигающий пункты меню при раскрытии drop-down
            $(this).next('.menu-item').css('padding-top', ($(this).find('ul').height() + 10)); //находим следующий li и присваеваем ему padding равный высоте списка, который сейчас выпадет
            $(this).next('.menu-item').addClass('bigpadd'); //...так же, добавляем ему класс .bigpadd для быстрейшей идентификации в дальнейшем

            /*// refreshing the page
			$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh');
            return false; // екобходимо согласно документации jQuery по .each
			})*/
        } else {
            $('.menu-item').each(function () {
                $('.dropdown').not('.active').removeClass('open');
                $('.bigpadd').css('padding-top', '0'); // т.к. активным стал иной .menu-item, находим .bigpadd удаляем лишний padding и... 
                $('.bigpadd').removeClass('bigpadd'); //... удаляем сам класс-пометку с элемента
                return false; // необходимо согласно документации jQuery по .each
            });

            $('.dropdown').each(function () {
                $(this).not('.active').removeClass('open');
            });


            //refreshing the page
            /*$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh');
            return false; // екобходимо согласно документации jQuery по .each
			})*/
        }
    });

    //Код для плавной прокрутки
   /* $('a[href^="#"]').click(function () {
        if ($(window).width() > 768) {
            var target = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(target).offset().top }, 600);
            return false;
        } else {
            var target = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(target).offset().top - 30 }, 0);
            return false;
        }
    });*/    
   

    //affix plugin
    // closing a menu after click (tap)
    $('#collapse li a').click(function () {
        if ($('#collapse').hasClass('in')) {
            $('button').click();

        }
    });

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

    //код генерации нового title
    /*$('title').html($(window).width() + ' x ' + $(window).height() + ' | ' + $('.main').width());
    $('.navbar-brand').html($(window).width() + ' x ' + $(window).height() + ' | ' + $('.main').width());
    $(window).resize(function () {
        $('title').html($(window).width() + ' x ' + $(window).height() + ' | ' + $('.main').width());
        $('.navbar-brand').html($(window).width() + ' x ' + $(window).height() + ' | ' + $('.main').width());
    });*/
    
    imgInit();
    
    var myLazyLoad = new LazyLoad();
    
    

});




/*$(window).on("load", function (e) {
    
})*/



function imgInit() {
    console.log('attr' + $('img:not(.logo)').attr('width'));
    console.log('prop' + $('img:not(.logo)').prop('width'));
    //let aspectRatio = $('img:not(.logo, .loaded)').prop('width') / $('img:not(.logo)').attr('width');
    let contentWidth = $('#section1').width();
    console.log(contentWidth);
    let aspectRatio = 1202 / (contentWidth - 30);
    console.log(aspectRatio);
    
    $('img').not('.logo').each(function(){
        //$(this).height(('prop' + $('img:not(.logo)').prop('width')) * aspectRatio + 'px');
        $(this).height(('prop' + $('img:not(.logo)').attr('height')) * aspectRatio + 'px');
        //$(this).css('border', '1px solid red');
        
    })
}