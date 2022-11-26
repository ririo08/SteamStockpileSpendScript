let url = location.href;
let title = encodeURIComponent(document.title);
let tweetURL = `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=miteru`;
window.open(tweetURL, '_blank');
