const interval = setInterval(() => {
  let header = document.querySelector("._3auIg");
  if (header) {
    clearInterval(interval);
    creatButton(header)    
  }
}, 1000);

const creatButton = header => {
  let button = document.createElement("button");
  button.innerHTML = "1x"
  button.classList.add("twoTimesButton")

  let enable = false;

  button.addEventListener("click", () => {
    enable = !enable;
    const audios = document.querySelectorAll("audio");
    
    if (enable) button.innerHTML = "2x"
    else button.innerHTML = "1x"

    let searchAudio = () => {
      audios.forEach(audio => {
        if (enable) audio.playbackRate = 2;
        else audio.playbackRate = 1;
      })
      let interval = setInterval(() => {
        searchAudio();
        clearInterval(interval);
      }, 1000);
    }

    searchAudio();
  })

  header.appendChild(button)
}
