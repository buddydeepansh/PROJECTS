// this is JSON;
class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.playButton = document.querySelector(".play");
    this.isPlaying = null;
    this.currentKick = `./allSounds/kick-classic-wav`;
    this.currentSnare = `./allSounds/snare-acoustic01-wav`;
    this.currentHihat = `./allSounds/hihat-acoustinc01-wav`;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }

  //adding animation to slected active pads.
  activePad() {
    this.classList.toggle("active");
  }

  //creating a loop which will run until start/stop is pressed.
  repeater() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }

  //starting with a basic tempo
  start() {
    const interval = (60 / this.bpm) * 1000;
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeater();
      }, interval);
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }

  //start stop button animation only toggler
  updateButton() {
    if (this.isPlaying) {
      this.playButton.innerText = "STOP";
      this.playButton.classList.add("active");
    } else {
      this.playButton.innerText = "PLAY";
      this.playButton.classList.remove("active");
    }
  }

  //change the selected sounds from select menu of tracks
  changeSound(e) {
    const selectionValue = e.target.value;
    const selectionName = e.target.name;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
    }
  }

  //mute/unmute a particuler sound
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    console.log(muteIndex);
    e.target.classList.toggle("active");
    console.log(muteIndex);
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
      }
    }
  }

  changeTempo(e) {
    console.log(e);
    const tempoText = document.querySelector(".tempo-number");
    tempoText.innerText = e.target.value;
  }

  updateTempo(e) {
    this.bpm = e.target.value;
    clearInterval(this.isPlaying);
    this.isPlaying = null;
    const playbtn = document.querySelector(".play");
    if (playbtn.classList.contains("active")) {
      this.start();
    }
  }
}

//creating new Object
const drumkit = new DrumKit();

// creating animation for clicking on pads.
drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);

  //removing animation from pads
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

//start/stop button event listner
drumkit.playButton.addEventListener("click", function () {
  drumkit.start();
  drumkit.updateButton();
});

//tune changer options event listner
drumkit.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drumkit.changeSound(e);
  });
});

//mute button toggles event listner
drumkit.muteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drumkit.mute(e);
  });
});

//tempo change event listners
drumkit.tempoSlider.addEventListener("input", function (e) {
  drumkit.changeTempo(e);
});
drumkit.tempoSlider.addEventListener("change", function (e) {
  drumkit.updateTempo(e);
});
