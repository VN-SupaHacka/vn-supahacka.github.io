const audioPlayer = document.getElementById("main_audio");
const audioButton = document.getElementById("toggle-sound");
let isPlaying = false;

function updateAudioBtn()
{
    audioButton.innerText = isPlaying ? "⏹" : "▶";
    audioButton.title = isPlaying ? "Parar Música" : "Iniciar Música";
}

function onSoundToggle(event)
{
    if(isPlaying)
        audioPlayer.pause();
    else
        audioPlayer.play();

    isPlaying = !isPlaying;
    updateAudioBtn();
}

let promise = audioPlayer.play();
if (promise !== undefined) {
    promise.then(_ => {
        isPlaying = true;
        updateAudioBtn();
  }).catch(error => {
        updateAudioBtn();
  });
}
audioButton.addEventListener('click', onSoundToggle);

