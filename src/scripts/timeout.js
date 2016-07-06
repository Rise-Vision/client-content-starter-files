// Goes to home page for idle timer
function goHome() {
  showPage("1");
}

// Set Timer
function setIdleTimer(id) {
    if (id && id != "1") {
      $.idleTimer(180000); //time in milli
      $(document).bind("idle.idleTimer", function(){
        $.idleTimer('destroy');
        goHome();
      });
    }
}