                                          //music
  const musicContainer = document.getElementById('music-container');
  const playBtn = document.getElementById('play');
  const nextBtn = document.getElementById('next');
	const prevBtn = document.getElementById('prev');
	
  const audio = document.getElementById('audio');
  const progress = document.getElementById('progress');
  const progressContainer = document.getElementById('progress-container');
  const title = document.getElementById('title');
	const cover = document.getElementById('cover');
	

 //Song titles
	const songs = ['inner-peace', 'meditation'];

	//Keep track of songs
	let songIndex = 1;

	//initially load song detail into DOM
  function loadSong(song) {
		title.innerText = song;
		audio.src = `music/${song}.mp3`;
		cover.src = `img/${song}.jpg`;
	}

	loadSong(songs[songIndex]);

	//Event listeners
	 //Playsong
	playBtn.addEventListener('click', play);

	 //changeSong
	prevBtn.addEventListener('click', prevSong);
	nextBtn.addEventListener('click', nextSong);

	 //Time/song update(progress bar)
	audio.addEventListener('timeupdate', updateProgress);

	 //click on progress bar
	progressContainer.addEventListener('click', setProgress);

	//When song ends
	audio.addEventListener('ended', nextSong)

	



	//Play function
	function play() {
		const isPlaying = musicContainer.classList.contains('play');
			if(isPlaying) {
				pauseSong();
			}else {
				playSong()
			}
	}

	//Play Song
	function playSong() {
		musicContainer.classList.add('play');
		playBtn.querySelector('i.fas').classList.remove('fa-play');
		playBtn.querySelector('i.fas').classList.add('fa-pause');

		audio.play();
	}

	//Play Song
	function pauseSong() {
		musicContainer.classList.remove('play');
		playBtn.querySelector('i.fas').classList.add('fa-play');
		playBtn.querySelector('i.fas').classList.remove('fa-pause');

		audio.pause();
	}


	//previous Song
function prevSong(){
	songIndex--;
	if(songIndex < 0) {
		songIndex = songs.length -1;
	}

	loadSong(songs[songIndex]);

	playSong();
}


	//next Song
	function nextSong(){
		songIndex++;

		if(songIndex > songs.length -1) {
			songIndex = 0;
		}
	
		loadSong(songs[songIndex]);
	
		playSong();
	}

	//Time update bar
	function updateProgress(e) {
		const {duration, currentTime} = e.srcElement;
		const progressPercent = (currentTime / duration) *100;
		progress.style.width = `${progressPercent}%`
	}

	//Set progress Bar
  function setProgress(e) {
		const width = this.clientWidth;
		const clickedPoint = e.offsetX;
		const duration = audio.duration;

		audio.currentTime =(clickedPoint / width) *duration;
	}

	
	

                                        //Breathing
const container = document.getElementById('container');
const text = document.getElementById('text');


const totalTime = 7000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation (){
	text.innerHTML ='Breathe In!';
	container.className = 'container grow';


	setTimeout(() => {
		text.innerHTML ='Hold!';

		setTimeout(() => {
			text.innerHTML ='Breathe Out!';
	container.className = 'container shrink';

	
			}, holdTime)

	}, breatheTime)
	
}

setInterval(breathAnimation, totalTime);


breathAnimation();
