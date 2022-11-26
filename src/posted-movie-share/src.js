// Youtubeの再生ページからビデオIDを取得
let videoID = window.location.search.split('v=')[1];
let idPosition = videoID.indexOf('&');
if (idPosition != -1) {
    videoID = videoID.substring(0, idPosition);
}

// 動画URL生成
let videoURL = "https://youtu.be/" + videoID;

// タイトルを取得
let videoTitle = document.querySelector("h1.style-scope.ytd-video-primary-info-renderer").textContent
videoTitle = encodeURIComponent(videoTitle);

// ツイートを特定形式に変換
let tweetText = `%E5%8B%95%E7%94%BB%E6%8A%95%E7%A8%BF%E2%96%BC%0D%0A%0D%0A${videoTitle}%0D%0A`;

// URLを作成
let tweetURL = `https://twitter.com/intent/tweet?url=${videoURL}&text=${tweetText}`;
window.open(tweetURL, '_blank');