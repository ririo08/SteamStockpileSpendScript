// ツイート内容を取得
var originalTweet = document.getElementById('status');

// 指定の形式に書き換え
var tweet = originalTweet.value.replace( / https/g, '\nhttps');
tweet = tweet.replace( /@YouTubeさんから/g, '');
tweet = '動画投稿 ▼\n\n' + tweet;

// 書き換えたツイートをエリアに出力
originalTweet.value = tweet;

//エリアを選択してコピー
originalTweet.select();
document.execCommand('copy');