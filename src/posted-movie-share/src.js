// 情報取得
const videoID = document.querySelector('meta[itemprop="videoId"]').content
const videoTitle = document.querySelector('meta[name="title"]').content
const videoURL = document.querySelector('link[rel="shortlinkUrl"]').href

// ツイート文作成
const tweetText = `動画投稿▼%0a%0a${videoTitle}`;

// URLを作成
const tweetURL = `https://twitter.com/intent/tweet?url=${videoURL}&text=${tweetText}`;
window.open(tweetURL, '_blank');