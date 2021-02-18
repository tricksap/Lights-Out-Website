
// add win cheker solution and random

$(".btn1").click(function(){
    var parent = $(this).parent().attr("class").split(' ')[1];
    var current = $(this).attr('class').split(' ')[0];
    nearBlocks(parent,current);
    pressed("."+parent+" " + "."+current)
  });

function pressed(picked){

    if( $(picked).hasClass("pressed")){
        $(picked).removeClass("pressed");
    }
    else{
        $(picked).addClass("pressed");
    }


}  