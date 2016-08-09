//Show a particular page of the Presentation.
function showPage(index) {
  var $page = $("div[data-index='" + index + "']");

  //Hide all pages with class of page
  $(".page").each(function() {
      $(this).hide();
  });

  //Show the page we want and start idle timer
  if ($page != null) {
      $page.show();
      setIdleTimer(index);
  }
}		

//Show home page on start
$(document).ready(function() {
    showPage("1");	
});