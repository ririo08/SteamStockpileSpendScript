 # hello world

guthub超初心者なのでおかしいところだらけかもしれませんがここはひとつ温かい目で見守っていてください。

## 積みゲー消化ルーレット
```javascript
javascript:(function(){classCount=document.getElementsByClassName("gameListRow").length;var a=Math.floor(Math.random()*classCount)+1;document.querySelectorAll(".gameListRow")[a].id="thisgameiscool";document.getElementById("thisgameiscool").style.backgroundColor="#2d1616";window.location.hash="";window.location.hash="thisgameiscool"})();
```


randomscript.jsは確認用のコンソールが入っているデータ、
randomscript.min.jsはコンソールを抜いたデータ、
bookmarklet_randomscript.jsはブックマークのURLに直接貼り付ける事ができるデータです。

上のbookmarkletは適当にrawのjsを起動させるものなので、ある程度メンテナンスできると思うんですが、不安な人はbookmarkletの方のやーつを使ってみてください。
