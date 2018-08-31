var load = document.getElementById("Webtext");

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

function exefunction(){
                var night = document.getElementById("box").checked;
                var link = document.getElementById('Webtext').getElementsByTagName('a');
                console.log(night);
                if (night) {
                	document.getElementById("earth").style.background = "url(PP.svg)";
                	document.getElementById("body").style.background = "#282828";
                	for (var i = 0; i < link.length; i++) {
    				link[i].style.color = '#696969';
					}
					document.getElementById("moon").style.background = "#a6a882"
                }
                else if (!night) {
                	document.getElementById("earth").style.background = "url(P.svg)";
                	document.getElementById("body").style.background = "#48abe3";
                	for (var i = 0; i < link.length; i++) {
    				link[i].style.color = '#fff';
					}
					document.getElementById("moon").style.background = "#eea"

                }
}