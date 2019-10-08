let songName = document.getElementById('apple-music-player').title;
let shareURL = 'https://twitter.com/share?text=';
let shareHash = ' #nowplaying';
shareURL += encodeURIComponent(songName) + encodeURIComponent(shareHash) +'&url=none';
window.open(shareURL, '_blank');
console.log(shareURL);