var originalTweet = document.getElementById('status');
var tweet = originalTweet.value.replace( / https/g, '\nhttps');
tweet = tweet.replace( /@YouTubeさんから/g, '');
tweet = '動画投稿 ▼\n\n' + tweet;
originalTweet.value = tweet;
originalTweet.select();
document.execCommand('copy');

javascript: (function ()% 7Bvar % 20originalTweet % 20 % 3D % 20document.getElementById('status') % 3Bvar % 20tweet % 20 % 3D % 20originalTweet.value.replace(% 20 % 2F % 20https % 2Fg % 2C % 20'%5Cnhttps') % 3Btweet % 20 % 3D % 20tweet.replace(% 20 % 2F % 40YouTube % E3 % 81 % 95 % E3 % 82 % 93 % E3 % 81 % 8B % E3 % 82 % 89 % 2Fg % 2C % 20'') % 3Btweet % 20 % 3D % 20'%E5%8B%95%E7%94%BB%E6%8A%95%E7%A8%BF%20%E2%96%BC%5Cn%5Cn' % 20 % 2B % 20tweet % 3BoriginalTweet.value % 20 % 3D % 20tweet % 3BoriginalTweet.select() % 3Bdocument.execCommand('copy') % 7D) ()