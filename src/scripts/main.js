"use strict";

var navigationApp = {};
var $buttonArrowDown = $(".button--arrow-down");
var timeoutTime = 180000;

//show the page depending on the data-page attribute of the main menu button selected
navigation.showPage = function(target) {
  $(".page-show").removeClass("page-show");
  $(".page--main[data-page ="+target+"]").addClass("page-show");
};

//highlight the page selected on the main menu
navigation.highlightNavigationButton = function() {
  $(".button--selected").removeClass("button--selected");
  $(this).addClass("button--selected");
};


//change the arrow position of the button to show open or closed
navigationApp.clickButton = function() {
  $buttonArrowDown.find(".line1").toggleClass("line1--moved");
  $buttonArrowDown.find(".line2").toggleClass("line2--moved");
};


//reset the page by scrolling to the top
navigationApp.scrollReset = function(scrollableElement){
  scrollableElement.scrollTop(0);
};

//timeout function and actions
function resetActive(){
  clearTimeout(activityTimeout);
  activityTimeout = setTimeout(inActive, timeoutTime);
};

// No activity detected, then do all of this;
function inActive(){
  var $homeButton = $(".button--home");
  navigation.highlightNavigationButton.call($homeButton);
  var $target = $homeButton.data("target");
  navigation.showPage($target);

  //======
  //add and rotate through any overlay cards
  $(".page--overlay").css("display","block");
  $(".page--overlay > div:gt(0)").hide();
  slideshowInterval = setInterval(function() {
    $(".page--overlay > div:first")
      .fadeOut(700)
      .next()
      .fadeIn(300)
      .end()
      .appendTo(".page--overlay");
  },  10000);
  //======
};

/* Check for user interaction and reset the timeout counter if interaction detected*/
$(document).bind("click", function(){
  resetActive();
});

//call the main functions that you need for the presentation here
navigationApp.init = function(){
  $(".button--arrow-down").on("click", function(){
    navigationApp.clickButton();
  });

  //change the page using the main menu
  $(".button").on("click", function() {
    var target = $(this).data("target");
    navigation.showPage(target);
    navigation.highlightNavigationButton.call(this);
  });
};

$(function(){

  navigationApp.init();

});
