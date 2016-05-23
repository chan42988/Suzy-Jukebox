// document.getElementById('song1').addEventListener("click", function(){
// 	Jukebox.play()
// });

// document.getElementById('song1').
// 	addEventListener("click", function(){
// 	Jukebox.pause()
// });

function Jukebox(songs) {
	this.songs = songs;

	this.playSong = function(song1) {
		document.getElementById(this.songs[0]).play();
	}

	this.pauseSong = function(song1) {
		document.getElementById(this.songs[0]).pause();2
	}
}

var myPlaylist = new Jukebox(["url0", "url1", "url2"])