document.getElementById('playSong').addEventListener("click", function(){
	jukebox.play()
	console.log("playBtn is working");
});

document.getElementById('pauseSong').
	addEventListener("click", function(){
	jukebox.pause()
	console.log("pauseBtn is working");
});

document.getElementById('stopSong').
	addEventListener("click", function(){
	jukebox.stop()
});

// document.getElementById('add').addEventListener("click", function(){
// 	jukebox.add()
// 	console.log("add is working");
// });

// 	document.getElementById('shuffle').
// 	addEventListener("click", function(){
// 	jukebox.shuffle()
// });

// document.getElementById('nextSong').
// 	addEventListener("click", function(){
// 	jukebox.next()
// });

function Song(title, song, url){
	this.title = title;
	this.song = song;
	this.url = url;
}

var Jukebox = function(){
	this.songs = [];
	var

	this.preload = function(input){
		this.songs.push(input)
	}

	// this.setAttribute = function(){
	// 	document.getElementById("song").setAttribute("src", this.songs[i].url)
	// }

	this.play = function(){
		// document.getElementById("playlist").setAttribute("src", this.songs[0])
    document.getElementById("playlist").play()
	}

	this.pause = function(){
		 document.getElementById("playlist").pause()
	}

	this.stop = function(){
		 document.getElementById("playlist").pause()
		 document.getElementById("playlist").currentTime = 0
	}

	this.add = function(title, song, URL){

		var title = document.getElementById("title").value
		var song = document.getElementById("song").value
		var URL = document.getElementById("URL").value

		var banana = new Song(title, song, URL);

		this.songs.push(banana)
	}

	// this.shuffle = function(){
	// 	 document.getElementById(this.songs[0]).pause();
	// 	 document.getElementById(this.songs[0]).currentTime = 0;
	// }

	// this.next = function(){
	// 	 document.getElementById(this.songs[]).pause();
	// 	 i=+1
	// 	 document.getElementById(this.songs[]).play();
	// }
};

var jukebox = new Jukebox();

var song1 = ('./audio/tumblr_lst5k2lBn11qbnlxno1.mp3')
var song2 = ('./audio/MGMT - Electric Feel.mp3') 
var song3 = ('./audio/Jimmy Eat World - Sweetness (Lyrics).mp3');


jukebox.preload(song1)
jukebox.preload(song2)
jukebox.preload(song3)


// jukebox.setAttribute()

document.getElementById("playlist").setAttribute("src", jukebox.songs[0])
