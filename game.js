
var clicks = 0
var state = [];

$(document).keydown(function(e){
     if(e.keyCode==82){
         random();
    }
});


function random(){
    for(var i = 0 ; i < Math.floor(Math.random()*10 + 1) ; i++){    
    nearBlocks("_" +Math.floor(Math.random()*5 + 1), "_"+ Math.floor(Math.random()*5 + 1))
    }
}

function checker(){
var current = $(".pressed").length
if (Number(current) === 25)
    {
        $("#title").text("Congratulations,You Win!")
    }   
}


$(".btn1").click(function(){
    clicks++;
    $("#clicks").text("Clicks:"+clicks)

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