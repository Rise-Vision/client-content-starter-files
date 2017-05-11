var TimeoutController = TimeoutController || {};

TimeoutController = (function() {

	//set the timeout time
	const timeoutTime = 10000;

	/*reset presentation to initial state if
	no activity for X seconds*/
	let activityTimeout = setTimeout(TimeoutController.inActive, timeoutTime);

	function _resetActive(){
	  clearTimeout(activityTimeout);
	  activityTimeout = setTimeout(TimeoutController.inActive, timeoutTime);
	};

	// No activity detected, then do all of this;
	function _inActive(){
		$(".button--selected").removeClass("button--selected");
		if ($(".page--popup").is(":visible")) {
			Navigation.closePopup();
		}
	  Navigation.showPage.call($(".area__navigation__logo"));
	};

	return {
		"resetActive" : _resetActive,
		"inActive" : _inActive
	}

})();