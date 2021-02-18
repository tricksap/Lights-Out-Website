
// add win cheker solution and random

$(".btn1").click(function(){
    var parent = $(this).parent().attr("class").split(' ')[1];
    var current = $(this).attr('class').split(' ')[0];
    nearBlocks(parent,current);
    pressed("."+parent+" " + "."+current)
    checker()
  });

  function nearBlocks(parent, current){
    var top = "._"+(Number(parent.substr(1,2))-1) +" "+ "."+current;
    var bot = "._"+(Number(parent.substr(1,2))+1) +" "+ "."+current;
    var left = "."+ parent + " " + "._"+ (Number(current.substr(1,2))-1)
    var right = "."+ parent + " " + "._"+ (Number(current.substr(1,2))+1)
    pressed(top);
    pressed(bot);
    pressed(left);
    pressed(right);
}

function pressed(picked){

    if( $(picked).hasClass("pressed")){
        $(picked).removeClass("pressed");
    }
    else{
        $(picked).addClass("pressed");
    }
}  