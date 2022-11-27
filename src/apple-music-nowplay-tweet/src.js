// 再生中の曲を取得
let songName = document.getElementById('apple-music-player').title;

// ツイート用のURLを生成
let shareURL = 'https://twitter.com/share?text=';

// Nowplayingも忘れずに。
let shareHash = ' #nowplaying';

// URLをencodeURIComponentで使える形式に変換
shareURL += encodeURIComponent(songName) + encodeURIComponent(shareHash) +'&url=none';

// 共有ページを開く
window.open(shareURL, '_blank');
console.log(shareURL);