import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const videoPlayer = document.getElementById('vimeo-player');
const player = new Player(videoPlayer);

player.on('timeupdate', throttle(onPlay, 1000))

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time" , data.seconds)
}



const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime)
    .then((seconds) => {
      // seconds = the actual time that the player seeked to
    })
    .catch((error) => {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;
        default:
          // some other error occurred
          break;
      }
    });
}
