javascript: (
    function () {
        classCount = document.getElementsByClassName('gameListRow').length;
        console.log(classCount);
        var random = Math.floor(Math.random() * classCount) + 1;
        console.log(random);
        var gameList = document.querySelectorAll('.gameListRow');
        console.log(gameList[random]);
        gameList[random].id = 'thisgameiscool';
        document.getElementById('thisgameiscool').style.backgroundColor = '#2d1616';
        window.location.hash = '';
        window.location.hash = 'thisgameiscool';
    }
)();