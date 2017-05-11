var Navigation = Navigation || {};

Navigation = (function() {

	let $popup = $(".page--popup");
	var isPopupVisible = false;

  function _showPage() {
		$(".visible").removeClass("visible");
		$(".button--selected").removeClass("button--selected");
		$(this).addClass("button--selected");
		let menuButtonData = $(this).data();
		let targetPage = menuButtonData.target;
		$(`section[data-page=${targetPage}]`).addClass("visible");

		if (isPopupVisible) {
			_closePopup();
		};
  };

  function _openPopup() {
  	isPopupVisible = true;
  	let popupData = $(this).data();
  	$popup.find("h2").text(popupData.name);
  	$popup.fadeIn();
  };

  function _closePopup() {
  	$popup.fadeOut();
  	$popup.find("h2").text("");
  	isPopupVisible = false;
  };

  return {
    "showPage": _showPage,
   	"openPopup": _openPopup,
    "closePopup": _closePopup
  };

})();