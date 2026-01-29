// jQuery Selectors

// Universal Selector (*)

$(document).ready(function(){
    $("*").css("backgroundColor","pink");
})

$(document).ready(function(){
    $("p").css("color","orange")
})

$(document).ready(function(){
    $("#id").css("color", "green")
})

$(document).ready(function(){
    $(".class").css("color","blue")
})

// Attribute Selector ([]) : ([attr],[attr=value])
$(document).ready(function(){
    $("input[name]").css({"border":"5px solid black", "color":"Green"})
})

// Combinators

// Group combinator

$(document).ready(function(){
    $("h1,p,h2,h3").css("backgroundColor","yellow")
})


//Descendent Combinator

$(document).ready(function(){
    $("div h3").css("backgroundColor","green")
})

// jQuery CSS

// Single-line CSS and Multiline CSS

$(document).ready(function(){
    $(".heading").css("color", "red");
})

// Multiline css example

$(document).ready(function(){
    $(".p1").css({
        // "fontSize" : "50px",
        "font-size" : "50px",
        "color" : "red",
        "backgroundColor" : "orange",
        "padding" : "50px",
        "opacity" : "0.5"
    })
})

