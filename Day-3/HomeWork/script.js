$(document).ready(function(){
    $("#b1").click(function(){
        $("#div1").addClass("class")
    })

    $("#b2").click(function(){
        $("#div1").removeClass("class");
    })

    $("#b3").click(function(){
        $("#div1").toggleClass("class");
    })

    $("#b4").click(function(){
        if($("#div1").hasClass("class")){
            alert("div1 has class");
        }else{
            alert("div1 don't have class")
        }
    });
});