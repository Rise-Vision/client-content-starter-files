$(function(){

  "use strict";

  //Global Elements
  const $mainWrapper = $("main");
  const $button = $mainWrapper.find(".button");
  const $logo = $mainWrapper.find(".area__navigation__logo");
  const $donor = $mainWrapper.find(".list__container--donors li");
  const $event = $mainWrapper.find(".list__container--events li");
  const $closeButton = $mainWrapper.find(".button--close");

  //Navigation Actions
  //=======

  //Show the selected page
  $button.on("click", Navigation.showPage);

  //Show the home page
  $logo.on("click", Navigation.showPage);

  //Show donor popup
  $donor.on("click", Navigation.openPopup);

  //Show event popup
  $event.on("click", Navigation.openPopup);

  //Hide popup
  $closeButton.on("click", Navigation.closePopup);

  //=======

  //Timeout =======
  //Check for user interaction and reset the timeout
  //counter if interation detected
  $(document).bind("click", function(){
    TimeoutController.resetActive();
  });

});
