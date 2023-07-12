(function() {
    var isHomeScreen = window.location.href.indexOf("homescreen://") === 0;
    if (isHomeScreen) {
      document.documentElement.style.display = "fullscreen";
      document.webkitRequestFullScreen();
    }
  })(); 