$(document).ready(function(){
    if($(this).scrollTop() > 100){
        $('nav').css({background:'rgba(0,0,0,.7)'})
    }else{
        $('nav').css({background:'transparent'})            
    }


    $('.menuBtn').click(function(){
        $('nav ul').toggleClass('open');
        $('body,html').toggleClass('opened');
    })


    $('.logo').click(function(){
        $('nav ul').removeClass('open');
        $('body,html').removeClass('opened');
    })


    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
            $('nav').css({background:'rgba(0,0,0,.7)'})
        }else{
            $('nav').css({background:'transparent'})            
        }
    })


    let links = $('nav a');

    links.click(function(){
        $('nav ul').toggleClass('open');
        $('body,html').toggleClass('opened');

        
        let dataId = $(this).data('id');
        let elem = `[data-to="${dataId}"]`;
        let scrollSize = $(elem).offset().top;
        $('html,body').animate({scrollTop:scrollSize},500)
    })


    let name = $('input#name');
    name.on('input',function(){
        let val = $(this).val();
        if(/\d/g.test($.trim(val))){
            let newVal  = $.trim(val).replace(/\d/g,'');
            $(this).val(newVal);
        }
    });

    name.on('blur',function(){
        let val = $(this).val();
        if($.trim(val)){
            $(this).css('background','#444444');
        }else{
            $(this).css('background','#ff7373');            
        }
    });

    
    let email = $('input#email');
    email.on('blur',function(){
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let val = $(this).val();
        if(emailRegex.test($.trim(val))){
            $(this).css('background','#444444');
        }else{
            $(this).css('background','#ff7373');            
        }
    });

    let message = $('textarea#message');
    message.on('blur',function(){
        let val = $(this).val();
        if($.trim(val)){
            $(this).css('background','#444444');
        }else{
            $(this).css('background','#ff7373');            
        }
    });


    let btnSubmit = $('form button[type=submit]');

    btnSubmit.click(function(e){
            e.preventDefault();
        
            let valName = $('input#name').val();
            if($.trim(valName)){
                $('input#name').css('background','#444444');
            }else{
                $('input#name').css('background','#ff7373');   
                return;            
            }
    
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let valEmail = $('input#email').val();
            if(emailRegex.test($.trim(valEmail))){
                $('input#email').css('background','#444444');
            }else{
                $('input#email').css('background','#ff7373');
                return;            
            }
    
            let valMessage = $('textarea#message').val();
            if($.trim(valMessage)){
                $('textarea#message').css('background','#444444');
            }else{
                $('textarea#message').css('background','#ff7373');    
                return;                                    
            }

            $('form')[0].submit();
    });


    $('.scroll').click(function(){
        let scrollSize = $('[data-to=wwd]').offset().top;
        $('html,body').animate({scrollTop:scrollSize},500)
    })

    
    $('.work').click(function(){
        let scrollSize = $('.team').offset().top;
        $('html,body').animate({scrollTop:scrollSize},500)
    })

})