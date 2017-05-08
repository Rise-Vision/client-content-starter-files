var timeoutController = timeoutController || {};

timeoutController = (function() {

	//set the timeout time
	const timeoutTime = 10000;

	/*reset presentation to initial state if
	no activity for X seconds*/
	let activityTimeout = setTimeout(timeoutController.inActive, timeoutTime);

	function resetActive(){
	  clearTimeout(activityTimeout);
	  activityTimeout = setTimeout(inActive, timeoutTime);
	};

	// No activity detected, then do all of this;
	function inActive(){
		$(".button--selected").removeClass("button--selected");
		if ($(".page--popup").is(":visible")) {
			navigation.closePopup();
		}
	  navigation.showPage.call($(".area__navigation__logo"));
	};

	return {
		resetActive : resetActive,
		inActive : inActive
	}

})();