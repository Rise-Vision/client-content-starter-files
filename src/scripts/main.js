"use strict";

var navigationApp = {};
var $buttonArrowDown = $(".button--arrow-down");


//change the arrow position of the button to show open or closed
navigationApp.clickButton = function() {
  $buttonArrowDown.find(".line1").toggleClass("line1--moved");
  $buttonArrowDown.find(".line2").toggleClass("line2--moved");
  console.log("test");
};


//reset the page by scrolling to the top
navigationApp.scrollReset = function(scrollableElement){
  scrollableElement.scrollTop(0);
};


//call the main functions that you need for the presentation here
navigationApp.init = function(){
  console.log("test");
  $(".button--arrow-down").on("click", function(){
    navigationApp.clickButton();
  });
};

$(function(){

  navigationApp.init();

});
