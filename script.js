var score = 0;

$(".subH").click(function() {
    $(".Home").show();
    $(".About").hide();
    $(".Profile").hide();
    $(".DontClick").hide();
});

$(".subA").click(function() {
    $(".Home").hide();
    $(".About").show();
    $(".Profile").hide();
    $(".DontClick").hide();
});

$(".subP").click(function() {
    $(".Home").hide();
    $(".About").hide();
    $(".Profile").show();
    $(".DontClick").hide();
});

$(".subD").click(function() {
    $(".Home").hide();
    $(".About").hide();
    $(".Profile").hide();
    $(".DontClick").show();
});

$(".subAns").click(function() {
    score += 1;
    
    if (score === 1) {
        $(".old").hide(); // Cherished
        $(".new").show(); // herished
    } else if (score === 2) {
        $(".old1").hide(); // herished
        $(".new1").show(); // harished
    } else if (score === 3) {
        $(".old2").hide(); // harished
        $(".new2").show(); // hatished
    } else if (score === 4) {
        $(".old3").hide(); // hatished
        $(".new3").show(); // hatshed
    } else if (score === 5) {
        $(".old4").hide(); // hatshed
        $(".new4").show(); // hated
    }
});

var number1 = 1 + Math.floor(Math.random() * 9);
var number2 = 1 + Math.floor(Math.random() * 9);
var number3 = 1 + Math.floor(Math.random() * 9);
var number4 = 1 + Math.floor(Math.random() * 9);

// alert(number1 + "" + number2 + "" + number3 + "" + number4);

if (number1 % 2 === 0 && number1 < 5.5) {
    $("#num10").text(number1);
} else if (number1 % 2 !== 0 && number1 < 5.5) {
    $("#num11").text(number1);
} else if (number1 % 2 === 0 && number1 > 5.5) {
    $("#num12").text(number1);
} else if (number1 % 2 !== 0 && number1 > 5.5) {
    $("#num13").text(number1);
}

if (number2 % 2 === 0 && number2 < 5.5) {
    $("#num20").text(number2);
} else if (number2 % 2 !== 0 && number2 < 5.5) {
    $("#num21").text(number2);
} else if (number2 % 2 === 0 && number2 > 5.5) {
    $("#num22").text(number2);
} else if (number2 % 2 !== 0 && number2 > 5.5) {
    $("#num23").text(number2);
}

if (number3 % 2 === 0 && number3 < 5.5) {
    $("#num30").text(number3);
} else if (number3 % 2 !== 0 && number3 < 5.5) {
    $("#num31").text(number3);
} else if (number3 % 2 === 0 && number3 > 5.5) {
    $("#num32").text(number3);
} else if (number3 % 2 !== 0 && number3 > 5.5) {
    $("#num33").text(number3);
}

if (number4 % 2 === 0 && number4 < 5.5) {
    $("#num40").text(number4);
} else if (number4 % 2 !== 0 && number4 < 5.5) {
    $("#num41").text(number4);
} else if (number4 % 2 === 0 && number4 > 5.5) {
    $("#num42").text(number4);
} else if (number4 % 2 !== 0 && number4 > 5.5) {
    $("#num43").text(number4);
}

$("#codeEnter").click(function() {
    var code = $("#code").val(); 
    if (code === number1 + "" + number2 + "" + number3 + "" + number4) {
        $(".old5").hide();
        $(".new5").show();
    } else {
        alert("Find all possible combinations with the 4 numbers you find until it works. If you are missing numbers, please reset the page.");
    }
});

$("#kill").click(function() {
    var kill = confirm("Are you sure you want to kill the page?");
    if (kill === true) {
        $("html").remove();
    }
});