$(document).ready(function () {
    // ! Append /prepend to body
    // $("body").append("<h1> Nguyen Huu Tien </h1>");
    $('#txtBox3').prepend("<h1> Nguyen Huu Tien </h1>");
    
    // ! Selector && Pseudo classes
    // $("h2").css('border', '1px solid red');
    $("h2:first").css('border', '1px solid green');
    $("h2:last").css('border', '1px solid yellow');
    
    // ! Create element
    // var newTxt = $('<p></p>');
    // newTxt.append("<h1> I just replaced somthing </h1>");
    // $("#txtBox").html(newTxt);

    // ! Click event
    $("#txtBox").on('click',  whenMouseisClicked);
    $("#txtBox").on('mouseleave', whenMouseIsLeaves);
    function whenMouseisClicked() {
        $("#txtBox").html("<h1> You clicked me </h1>");
    }
    function whenMouseIsLeaves() {
        $("#txtBox").html("<h1> Where are you going ?</h1>");
    }

    // ! Hide/ Show txtBox2
    $("#show").on("click", function() {
        $("#txtBox2").show();
    });
    $("#hide").on('click', function() {
        $("#txtBox2").hide();
    });

    // ! Hover
    $(".txtCopy").hover(highlightCopy);
    function highlightCopy() {
        $(this).toggleClass("highlight");
    }

    // ! Fading 
    $("#fade-in").on("click", function() {
        $("#txtBox3").fadeIn(3000, function() {
            alert("I'm done");
        });
    });

    $("#fade-out").on("click", function() {
        $("#txtBox3").fadeOut("3000", function() {
            alert("I'm done");
        });
    });

    // ! Sliding
    $("#slide-up").on("click", function() {
        $("#txtBox3").slideUp("1000", function() {
            alert("done");
        })
    })

    $("#slide-down").on("click", function() {
        $("#txtBox3").slideDown("1000", function() {
            alert("done");
        });
    });

    // ! Animate 
    $("#grow").click(function() {
        $("#txtBox3").animate({
            width: "500px"
        }, 2000);
    });

    $("#move").click(function() {
        $("#txtBox3").animate({
            marginLeft: "500px"
        }, 2000);
    });
 
    $("#bigger").click(function() {
        $("#txtBox3").animate({
            fontSize: "40px"
        }, 2000);
    });
    
    $("#many-thing").click(function() {
        $("#txtBox3").animate({
            fontSize: "40px",
            marginLeft: "400px",
            width: "500px"
        }, 2000);
    });
        
});