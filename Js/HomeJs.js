var load = document.getElementById("Web text");

function Games() {
	document.getElementById("Games").style.display = "block";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";

}

function Home() {
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "block";
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";
}

function Websites() {
	document.getElementById("Websites").style.display = "block";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";

}

function Projects() {
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "block";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";
}

function About() {
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "block";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";
	document.getElementById("showWith").innerHTML = "screen size " + screen.width;
}

function PcGames() {
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "block"
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";
}

function IOSGames() {
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "block";
	document.getElementById("AndroidGames").style.display = "none";
}

function AndroidGames() {
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Games").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "block";
	document.getElementById("IOSGames").style.display = "none";
}