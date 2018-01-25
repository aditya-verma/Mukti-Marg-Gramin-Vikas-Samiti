window.onload = function() {
  document.getElementById('body').className = 'loaded';
};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
		document.getElementById("contact_bar").style.top = "-8";
  } else {
    document.getElementById("header").style.top = "60px";
		document.getElementById("contact_bar").style.top = "0px";
  }
}