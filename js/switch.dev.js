/**
 * Switch function
 * @type {function}
 */
var $el = 'switch-button',
    speed = 300,
    animating = false,
    nstyle = '1', //1 = Apple green,2 = Apple blue,3 = Apple red
    style = 'checked-button-' + nstyle;
function switchThis(){
    var inputid = $(this).attr('input-id'), state = $(this).attr('state');
    if(animating === false){
        if(state === 'false'){
            animating = true;
            $(this).children('div').animate({'margin-left' : '22px'}, speed, 'easeOutBack',function(){
                animating = false;
            });
            $(this).addClass(style);
            $('#' + inputid).attr('checked', '');
            $(this).attr('state', 'true');
        } else {
            animating = true;
            $(this).children('div').animate({'margin-left' : '0px'}, speed, 'easeOutBack',function(){
                animating = false;
            });
            $(this).removeClass(style);
            $('#' + inputid).removeAttr('checked');
            $(this).attr('state', 'false');
        }
    }
}
$(document).ready(function(){
    $('.' + $el + '').each(function(){
        if($(this).attr('type') === 'checkbox'){
            var id = $(this).attr('id');
            $(this).before('<div class="switching-button-contener" input-id="'+id+'" state="false"><div></div><span class="on"></span><span class="off"></span></div>');
        }
    });
    $('.switching-button-contener').on('click', switchThis);
});
