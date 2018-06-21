/**
 * Switch function
 * @type {function}
 */
var $el = 'switch-button',              //Element to target
    speed = 300,                        //Animation speed
    animating = false,                  //Animating state
    nstyle = '1',                       //Applied color (1 to 3)
    style = 'checked-button-' + nstyle; //Class by applied style
function switchThis(){
    var inputid = $(this).attr('input-name'),
        state = $(this).attr('state');
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
            var name = $(this).attr('name');
            $(this).before('<div class="switching-button-contener" input-name="'+name+'" state="false"><div></div><span class="on"></span><span class="off"></span></div>');
        }
    });
    $('.switching-button-contener').on('click', switchThis);
});
