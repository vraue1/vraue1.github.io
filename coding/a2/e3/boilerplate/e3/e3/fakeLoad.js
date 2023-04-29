/*
this is a function that handles the fake load time -
it takes in a number in ms tha defines how long the fake load will be 
and a url to load, in this case just a reference to the hosono.html file
*/
function loadPageAfterDelay(delayTime, pageUrl) {
  // Hide the button after it is clicked
  document.getElementById("load-link").classList.add("clicked");

  // Show the loading throbber
  document.getElementById("load-throbber").classList.add("show");

  // Load the page after the delay time
  setTimeout(function() {
    window.location.href = pageUrl;
  }, delayTime);
}

