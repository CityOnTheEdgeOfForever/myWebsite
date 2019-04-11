//jshint esversion: 6
const var1 = $(".hero-content").width();
const var2 = $(".hero-content").height();
let varEmail;

// $(".myCol").width(var1);
// $(".myCol").height(var2);
$(".myPic").attr("src","/images/bg-img/myImageScaledDown.jpg");
$(".myPic").attr("width",var1);
$(".myPic").attr("height",var2);
//
// // bla = document.querySelector(".myPic").className;
//
// document.getElementByClass("myImg").style.objectFit = "fill";
// // document.querySelector(".myPic").style.objectFit = "none";

const headerAreaHeight = $(".header-area").height();
// $(".header-area").attr("padding-bottom",headerAreaHeight*0.75);
const profileAreaHeight = $(".col-").height();

const heroAreaHeightCalc = (headerAreaHeight + profileAreaHeight) * 1.1;
// $(".hero-area").height(heroAreaHeightCalc);

const vcardMainMenuHeight = $(".vcard-main-menu").height();

$(".hero-area").css("marginTop", vcardMainMenuHeight);

$("#skills").css("marginBottom", "1rem");

$(".header-area").css("boxShadow", "0 5px 30px 0 rgba(0, 0, 0, 0.15)");

$(".cool-facts-area li").css("list-style-type", "disc");
$(".cool-facts-area li").css("color", "white");
$(".cool-facts-area li").css("marginBottom", ".5rem");
$(".cool-facts-area li span").css("color", "black");
$("#Resume").css({"paddingTop": "2rem","paddingBottom": "2rem", "marginBottom": "4rem"});
$(".skills-text").css("textAlign", "left");
$(".circle span").css("textAlign", "center");

function makeEmailHyperlink() {
  const x = document.querySelectorAll(".emailMe");
  x.forEach(function(result, index){
    emailMe = "mailto:" + $(result).text();
    $(result).wrapInner('<a href=' + emailMe + '/>');
    console.log(index + " - " + emailMe);
  });
}
document.querySelector(".about-me-area").classList.remove("section-padding-100");

// document.querySelector(".menu1").style.marginBottom = "3rem";

// $(".menu1").css("marginBottom","10rem");

$(".hero-area").css("height", "auto");

makeEmailHyperlink();
