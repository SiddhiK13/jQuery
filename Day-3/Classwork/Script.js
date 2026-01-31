$(document).ready(function(){

    // <!-- get and set  -->
    $("#div1").text("this is text example");

    $("#div2").html("<b>this is html example</b>");

    $("#div3").attr("href","https://www.google.com/");
    
    $("#input").val("enter your name");


    // Add Elements: append( ), prepend( ), before( ), after( ) 

    $("#b1").click(function(){
        $("#div4").append(" this is append");
    })

    $("#b2").click(function(){
        $("#div4").prepend("this is prepend ");
    })

    $("#b3").click(function(){
        $("#div4").before("this is before")
    })    

    $("#b4").click(function(){
        $("#div4").after("this is after");
    })


    // Remove Elements: remove( ), empty( )

    $("#b5").click(function(){
        $("#div5").remove();
    })

     $("#b6").click(function(){
        $("#div5").empty();
    })

})