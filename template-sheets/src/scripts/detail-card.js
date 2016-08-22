$(function(){

//main variables
var $page = $(".page");
var $wrapper = $(".wrapper");
var $overlay = $(".overlay");
var $detailcard = $(".detail-card");

//open modal when person is clicked
$page.on("click",".person", function(){
  var $detailImage = $(this).attr("data-image");
  var $detailName = $(this).attr("data-name");
  var $detailTitle = $(this).attr("data-title");
  var $detailPhone = $(this).attr("data-phone");
  var $detailEmail = $(this).attr("data-email");

   $detailcard.find(".detail__column2").attr("src",$detailImage);
   $detailcard.find(".detail__column3").text($detailName);
   $detailcard.find(".detail__column4").text($detailTitle);
   $detailcard.find(".detail__column5").text($detailPhone);
    $detailcard.find(".detail__column6").text($detailEmail);
 $overlay.fadeIn();
});

//close modal when close button is clicked
$wrapper.on("click", ".button__close", function(){
  $overlay.fadeOut();
   $detailcard.find(".detail__column2").attr("src","");
   $detailcard.find(".detail__column3").text("");
   $detailcard.find(".detail__column4").text("");
   $detailcard.find(".detail__column5").text("");
  $detailcard.find(".detail__column6").text("");
 });
});