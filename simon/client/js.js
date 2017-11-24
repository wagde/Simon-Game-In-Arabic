
$(document).ready(function () {
    $("#cover").hide();
})
var colorChange = function (color) {
    $(document).ready(function () {
        $("." + color).animate({ opacity: '0.4' })
        $("." + color).animate({ opacity: '1' }, 1000)
    })
}
var colors = ["red", "blue", "green", "yellow"];
var playerColor = [];
var colorFunc = function (numberColor) {
    var i = 0;
    function myLoop() {
        setTimeout(function () {
            colorChange(colorArray[i])
            document.getElementById(colorArray[i]).play()
            i++;
            if (i < colorArray.length) {
                myLoop();
            }
            else {
                $("#cover").hide();
            }

        }, 1500)
    }
    myLoop();
}
var colorArray = [];
var i
var play = function () {
    colorNumber = Math.floor((Math.random() * 4) + 0);
    colorArray.push(colors[colorNumber]);
    colorFunc()
}
$(document).ready(function () {
    $(".color").click(function () {
        var coloName = $(this).attr('class');
        if (coloName.slice(6, ) == "start") {
            alert("ابدأ  الان ");
            $(".start").hide();
            play()
        }
        else {
            document.getElementById(coloName.slice(6, )).play();
            $("." + coloName.slice(6, )).animate({ opacity: '0.4' });
            $("." + coloName.slice(6, )).animate({ opacity: '1' }, 1000);
            playerColor.push(coloName.slice(6, ));
            console.log(playerColor)
            console.log(colorArray)
            if (!checkMatch(playerColor, colorArray)) {
             
                alert("لقد خسرت");
                playerColor = [];
                colorArray = [];
                $(".start").show();
                $("#levelnumber").text(1);
                return false
            }
            if (playerColor.length == colorArray.length) {
                playerColor = [];
                $("#levelnumber").text(colorArray.length + 1);
                $("#cover").show();
                play()
            }
        }
    })
})
var checkMatch = function (player, pc) {
    for (var i = 0; i < player.length; i++) {
        if (player[i] != pc[i]) {
            return false
        }
    }
    return true    
}