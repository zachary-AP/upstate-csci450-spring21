var segmentTitles = new Array(50);
var segmentTimes = new Array(50);

//play button scripts
function pausePlay(){
	var audio = document.getElementById("audio");
	var button = document.getElementById("buttonPause");
	if(button.innerHTML == "Pause"){
		audio.pause();
		button.innerHTML = "Play"
	}
	else{
		audio.play();
		button.innerHTML = "Pause";
	}
}

//5sec forward and rewind buttons
function skipUp(){
	var audio = document.getElementById("audio");
	audio.currentTime += 5;
}
function skipBack(){
	var audio = document.getElementById("audio");
	audio.currentTime -= 5;
}

//display current song timestamp
//format time precision -> 00:00
var songTime = setInterval(timer, 1000);
function timer(){
	var t = audio.currentTime;
	document.getElementById("timestamp").innerHTML = t;
}

function Button(timestamp, title){
	this.timestamp = timestamp;
	this.title = title;
}

var btnOne = new Button(30, "30 sec");
var btnTwo = new Button(150, "1/2mark");

function createButton(Button){
	var newBtn = document.createElement("button");
	newBtn.type = "button";
	newBtn.innerHTML = Button.title;
	
	newBtn.appendChild("segmentList");
}

function jump(timestamp){
	var audio = document.getElementById("audio");
	audio.currentTime = timestamp;
}