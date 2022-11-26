//Steamのゲーム一覧についているクラスの数を引っ張ってくる
classCount = document.getElementsByClassName('gameListRow').length;
console.log('ゲームの数 = ' + classCount);

//とりあえず乱数生成
var random = Math.floor(Math.random() * classCount) + 1;
console.log(random);

//ゲーム一覧を配列で引っ張る
var gameList = document.querySelectorAll('.gameListRow');
//どのゲームが選ばれたかを見る
console.log(gameList[random]);
//選ばれたゲームにID-thisgameiscoolを付与しスタイル適用
gameList[random].id = 'thisgameiscool';
document.getElementById('thisgameiscool').style.backgroundColor = '#2d1616';

//今の所の問題点・選ばれた場所にジャンプする。
window.location.hash = '';
window.location.hash = 'thisgameiscool';
