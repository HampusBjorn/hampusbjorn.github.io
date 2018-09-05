var everything
var d = new Date();

function update() {
everything = document.getElementById("Webtext").innerHTML;
}

window.onload = function() {
	var linkopacity = document.getElementById('Webtext').getElementsByTagName('a');
$(document).ready(function () {
    if(window.location.href.indexOf("#About") > -1) {
       About();
    }
    else if(window.location.href.indexOf("#Games") > -1) {
       Games();
    }
    else if(window.location.href.indexOf("#Home") > -1) {
       Home();
    }
    else if(window.location.href.indexOf("#Websites") > -1) {
       Websites();
    }
    else if(window.location.href.indexOf("#Projects") > -1) {
       Projects();
    }
    else if(window.location.href.indexOf("#IOSGames") > -1) {
       IOSGames();
    }
    else if(window.location.href.indexOf("#AndroidGames") > -1) {
       AndroidGames();
    }
    else if(window.location.href.indexOf("#PcGames") > -1) {
       PcGames();
    }

});
var Interval = setInterval(Textin, 10);
function Textin() {
	for (var i = 0; i < linkopacity.length; i++) {
    				linkopacity[i].style.opacity = '1';
					}
					clearInterval(Interval);
}
	if (d.getHours() >= 15) {
		exefunction();	
	}
}

function Games() {
	document.getElementById("Games").style.display = "block";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Websites").style.display = "none";
	document.getElementById("Projects").style.display = "none";
	document.getElementById("About").style.display = "none";
	document.getElementById("PcGames").style.display = "none";
	document.getElementById("AndroidGames").style.display = "none";
	document.getElementById("IOSGames").style.display = "none";
	update();

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
	update();
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
	update();

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
	update();
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
	update();
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
	update();
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
	update();
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
	update();
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
			document.getElementById("box").checked = true;
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
