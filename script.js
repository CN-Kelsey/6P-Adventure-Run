$(".banana").hide();
$(".step2").hide();
$(".step3").hide();
$(".cyclists").hide();
$(".buttons").hide();
$(".crash").hide();
$(".step4").hide();
$(".water").hide();
$(".end").hide();

$(".start-running").click(function() {
    $(".banana").show();
    $(".step2").show();
    $(".start-running").hide();
});

$(".banana").dblclick(function() {
    $(".banana").hide();
    $(".step2").hide();
    $(".cyclists").show();
    $(".buttons").show();
    $(".step3").show();

});

$(".keep-running").click(function() {
    $(".crash").show();
    $(".move").hide();
    $(".buttons").hide();
    $(".cyclists").hide();
    $(".step3").hide();
    $("body").css("background-color", "red");

});

$(".move").click(function() {
    $(".keep-running").hide();
    $(".step3").hide();
    $(".move").hide();
    $(".louise-intro").fadeOut();
    $(".cyclists").hide();
    $(".step4").show();
    $(".water").fadeIn();

});

$(".water").hover(function() {
    $(".step3").hide();
    $(".move").hide();
    $(".step4").fadeOut();
    $(".end").fadeIn();
    $(".water").fadeOut();
    $(".intro").fadeOut();
    $(".louiseintro").fadeOut();
    $("h1").hide();

});