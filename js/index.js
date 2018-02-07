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
function openOverview() {
    document.getElementById("overview_head").style.visibility = "visible";
		document.getElementById("overview").style.visibility = "visible";
		document.getElementById("vision_head").style.visibility = "hidden";
		document.getElementById("vision").style.visibility = "hidden";
		document.getElementById("mission_head").style.visibility = "hidden";
		document.getElementById("mission").style.visibility = "hidden";
		document.getElementById("philosophy_head").style.visibility = "hidden";
		document.getElementById("philosophy").style.visibility = "hidden";
		document.getElementById("current_focus_head").style.visibility = "hidden";
		document.getElementById("current_focus").style.visibility = "hidden";
		document.getElementById("five_year_plan_head").style.visibility = "hidden";
		document.getElementById("five_year_plan").style.visibility = "hidden";
}
function openVision() {
    document.getElementById("overview_head").style.visibility = "hidden";
		document.getElementById("overview").style.visibility = "hidden";
		document.getElementById("vision_head").style.visibility = "visible";
		document.getElementById("vision").style.visibility = "visible";
		document.getElementById("mission_head").style.visibility = "hidden";
		document.getElementById("mission").style.visibility = "hidden";
		document.getElementById("philosophy_head").style.visibility = "hidden";
		document.getElementById("philosophy").style.visibility = "hidden";
		document.getElementById("current_focus_head").style.visibility = "hidden";
		document.getElementById("current_focus").style.visibility = "hidden";
		document.getElementById("five_year_plan_head").style.visibility = "hidden";
		document.getElementById("five_year_plan").style.visibility = "hidden";
}
function openMission() {
    document.getElementById("overview_head").style.visibility = "hidden";
		document.getElementById("overview").style.visibility = "hidden";
		document.getElementById("vision_head").style.visibility = "hidden";
		document.getElementById("vision").style.visibility = "hidden";
		document.getElementById("mission_head").style.visibility = "visible";
		document.getElementById("mission").style.visibility = "visible";
		document.getElementById("philosophy_head").style.visibility = "hidden";
		document.getElementById("philosophy").style.visibility = "hidden";
		document.getElementById("current_focus_head").style.visibility = "hidden";
		document.getElementById("current_focus").style.visibility = "hidden";
		document.getElementById("five_year_plan_head").style.visibility = "hidden";
		document.getElementById("five_year_plan").style.visibility = "hidden";
}
function openPhilosophy() {
    document.getElementById("overview_head").style.visibility = "hidden";
		document.getElementById("overview").style.visibility = "hidden";
		document.getElementById("vision_head").style.visibility = "hidden";
		document.getElementById("vision").style.visibility = "hidden";
		document.getElementById("mission_head").style.visibility = "hidden";
		document.getElementById("mission").style.visibility = "hidden";
		document.getElementById("philosophy_head").style.visibility = "visible";
		document.getElementById("philosophy").style.visibility = "visible";
		document.getElementById("current_focus_head").style.visibility = "hidden";
		document.getElementById("current_focus").style.visibility = "hidden";
		document.getElementById("five_year_plan_head").style.visibility = "hidden";
		document.getElementById("five_year_plan").style.visibility = "hidden";
}
function openCurrentFocus() {
    document.getElementById("overview_head").style.visibility = "hidden";
		document.getElementById("overview").style.visibility = "hidden";
		document.getElementById("vision_head").style.visibility = "hidden";
		document.getElementById("vision").style.visibility = "hidden";
		document.getElementById("mission_head").style.visibility = "hidden";
		document.getElementById("mission").style.visibility = "hidden";
		document.getElementById("philosophy_head").style.visibility = "hidden";
		document.getElementById("philosophy").style.visibility = "hidden";
		document.getElementById("current_focus_head").style.visibility = "visible";
		document.getElementById("current_focus").style.visibility = "visible";
		document.getElementById("five_year_plan_head").style.visibility = "hidden";
		document.getElementById("five_year_plan").style.visibility = "hidden";
}
function openFiveYearPlan() {
    document.getElementById("overview_head").style.visibility = "hidden";
		document.getElementById("overview").style.visibility = "hidden";
		document.getElementById("vision_head").style.visibility = "hidden";
		document.getElementById("vision").style.visibility = "hidden";
		document.getElementById("mission_head").style.visibility = "hidden";
		document.getElementById("mission").style.visibility = "hidden";
		document.getElementById("philosophy_head").style.visibility = "hidden";
		document.getElementById("philosophy").style.visibility = "hidden";
		document.getElementById("current_focus_head").style.visibility = "hidden";
		document.getElementById("current_focus").style.visibility = "hidden";
		document.getElementById("five_year_plan_head").style.visibility = "visible";
		document.getElementById("five_year_plan").style.visibility = "visible";
}