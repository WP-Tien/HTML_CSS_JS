$(document).ready(function () {

    // Append /prepend
    // $("body").append("<h1>I love Jquery</h1>");
    // $(".txtBox").prepend('<h1>Prepend</h1>');


    // Selector & Pesudo class
    // $("h2").css('border', '1px solid green');
    $("h2:first").css({ 'border': '2px solid green', 'background-color': "red" });
    $("h2:nth-child(2)").css('border', '2px solid blue');
    $("h2:nth-last-child(2)").css('background-color', 'yellow');
    $("h2:last").css('border', '2px solid red');

    // Create element
    var newTxt = $('<p></p>');
    newTxt.append("<h1> I just replaced something </h1>");
    $("#txtBox").html(newTxt);

    // Click event
    $("#txtBox").on('click', whenMouseisClicked);
    $("#txtBox").on('mouseleave', whenMouseIsLeave);
    function whenMouseisClicked() {
        alert('You clicked me');
    }
    function whenMouseIsLeave() {
        $("#txtBox").html("Where are you going ?");
    }

    // Hide/Show txtBox2
    $("#show").on("click", function () {
        $("#txtBox2").show();
    });
    $("#hide").on("click", function () {
        $("#txtBox2").hide();
    });
    $("#toggle").on("click", function () {
        $("#txtBox2").toggle();
    })

    // Hover
    // $(".txtCopy").on("mouseover", function () {
    //     console.log($(this));
    //     $(this).toggleClass('highlight');
    // });
    $(".txtCopy").hover(function () {
        $(this).toggleClass('highlight');
    });

    // Fading
    $("#fadeIn").on("click", function () {
        $("#txtBox3").fadeIn(3000, function () {
            alert("I'm done");
        });
    });

    $("#fadeOut").on("click", function () {
        $('#txtBox3').fadeOut("3000", function () {
            alert("done");
        })
    });

    // Sliding
    $("#slideUp").on("click", function () {
        $('#txtBox3').slideUp("1000", function () {
            alert("done");
        })
    });

    $("#slideDown").on("click", function () {
        $('#txtBox3').slideDown("1000", function () {
            alert("done");
        })
    })

    // Animate
    $("#grow").on("click", function (e) {
        e.preventDefault();

        $("#txtBox4").animate({
            width: "500px"
        }, 2000);
    });

    $("#move").on("click", function (e) {
        e.preventDefault();

        $("#txtBox4").animate({
            marginLeft: "500px"
        }, 2000);
    });

    $("#bigger").on("click", function (e) {
        e.preventDefault();

        $("#txtBox4").animate({
            fontSize: "30px"
        }, 2000);
    });

    $("#many-thing").on("click", function (e) {
        e.preventDefault();

        $("#txtBox4").animate({
            fontSize: "30px",
            marginLeft: "2px",
            width: "500px"
        }, 2000);
    });
}); 