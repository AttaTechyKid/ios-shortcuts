// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  // Function to handle navigation and scroll to top
  function navigateTo(url) {
    // Scroll to top before navigating
    scrollToTop();
    
    // Use the History API to change the URL
    history.pushState(null, null, url);
    
    // Prevent the default link behavior
    event.preventDefault();
  }
  
  // Attach click event handlers to your navigation links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      navigateTo(link.href);
    });
  });
  