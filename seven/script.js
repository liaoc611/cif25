const audioPlayer = document.getElementById('musicFile');
const playButton = document.getElementById('musicBox');

playButton.addEventListener('click', () => {
if(audioPlayer.paused || audioPlayer.ended) {
    audioPlayer.play()
}
else{
    audioPlayer.pause()
}
        });