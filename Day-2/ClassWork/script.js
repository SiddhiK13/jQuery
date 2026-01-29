
$(document).ready(function(){

    // Click
    $("#btn1").click(function(){
        $("#div1").css("backgroundColor","pink")
    })

    //dblclick

    $("#btn2").dblclick(function(){
        $("#div1").css("backgroundColor","green")
    })

    //hover
    $("#btn3").hover(function(){
        $("#div1").css("border","2px solid red")
    })

    //mouseenter
    $("#div1").mouseenter(function(){
        $("#div1").css("backgroundColor","red")
    })

    //mouseleave
    $("#div1").mouseleave(function(){
        $("#div1").css("backgroundColor","purple")
    })

    // onkeydown

    $("#div2").keydown(function () {
       $("#div2").css("background-color", "purple");
    });
   
    $("#div2").keyup(function () {
       $("#div2").css("background-color", "pink");
    });
   
   
    $("#div2").keypress(function () {
       $("#div2").css("background-color", "red");
    });

    // form events
    //focus
    $("#div3").focus(function () {
       $("#div3").css("border", "6px solid blue");
    }); 

    $("#div3").blur(function () {
       $("#div3").css("background-color", "red");
    });

    
    // Event Handler Attachment (on)
    $("#btn4").on("click",function () {
       $("#div4").css("backgroundColor", "red");
    });



})