$(document).ready(function(){
    $("#btn1").click(function(){
        $("#div1").hide(5000);
    })

    $("#btn2").click(function(){
        $("#div1").show(1000);
    })

    $("#btn3").click(function(){
        $("#div1").toggle(1000);
    })


    
    // fading

    $("#btn4").click(function(){
        $("#div2").fadeIn(1000);
    })

    $("#btn5").click(function(){
        $("#div2").fadeOut(1000);
    })

    $("#btn6").click(function(){
        $("#div2").fadeToggle(1000);
    })

    $("#btn7").click(function(){
        $("#div2").fadeTo(1000 , 0.5);
    })


    // sliding

    $("#btn8").click(function(){
        $("#div3").slideDown(1000);
    })

    $("#btn9").click(function(){
        $("#div3").slideUp(1000);
    })
    
    $("#btn10").click(function(){
        $("#div3").slideToggle(1000);
    })


    // animation

    $("#btn11").click(function () {
        $("#div4").animate({
            width: "200px",
            height: "200px",
            left: "100px",
            opacity: 0.5
        }, 1000);
    });

})
