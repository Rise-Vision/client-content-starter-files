var navigation = navigation || {};

navigation = (function() {

	let $popup = $(".page--popup");
	var isPopupVisible = false;

  function showPage() {
		$(".visible").removeClass("visible");
		$(".button--selected").removeClass("button--selected");
		$(this).addClass("button--selected");
		let menuButtonData = $(this).data();
		let targetPage = menuButtonData.target;
		$(`section[data-page=${targetPage}]`).addClass("visible");

		if (isPopupVisible) {
			closePopup();
		};
  };

  function openPopup() {
  	isPopupVisible = true;
  	let popupData = $(this).data();
  	$popup.find("h2").text(popupData.name);
  	$popup.fadeIn();
  };

  function closePopup() {
  	$popup.fadeOut();
  	$popup.find("h2").text("");
  	isPopupVisible = false;
  };

  return {
    showPage: showPage,
   	openPopup: openPopup,
    closePopup: closePopup
  };

})();