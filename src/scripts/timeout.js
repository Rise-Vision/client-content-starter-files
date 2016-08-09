// Goes to home page for idle timer
function goHome() {
  showPage("1");
}

// Set Timer
function setIdleTimer(id) {
      $.idleTimer(180000); //time in milli
      $(document).bind("idle.idleTimer", function(){
        $.idleTimer('destroy');
        goHome();
      });
}