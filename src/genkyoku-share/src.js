// 要素取得
const videoTitle = document.querySelector(
  '[data-sessionlink="feature=player-title"]'
).innerText;
const videoId = document
  .querySelector('ytd-watch-flexy')
  .getAttribute('video-id');

// 文章生成
const videoUrl = `https://youtu.be/${videoId}`;
const shareText = `良かったら原曲も聴いてくれよな！\n\n${videoTitle}\n${videoUrl}`;

// コピー
navigator.clipboard.writeText(shareText);
