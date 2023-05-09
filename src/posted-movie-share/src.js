// 情報取得
const videoTitle = document.querySelector('meta[name="title"]').content;
const videoURL = document.querySelector('link[rel="shortlinkUrl"]').href;

// ツイート文作成
const tweetText = `動画投稿▼\n\n${videoTitle}\n${videoURL}`;

// コピー
navigator.clipboard.writeText(tweetText);
