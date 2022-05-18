function gameHandlerWrapper() {
    let tile = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let turnsPlayed = 0;
    let chance = 0;
    let winStatus = -1;
    let winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

    function gameHandler(id) {
        print(id);
        let index = parseInt(id.charAt(id.length - 1)) - 1;

        if (tile[index] == 0) {
            document.getElementById(id).innerHTML = `${chance == 1 ? '<span style=\'color:#1989E5\'>o' : '<span style=\'color:#e65151f6\'>x'}</span>`
            tile[index] = chance + 1;
            winStatus = checkWin();

            turnsPlayed++;
            chance = 1 - chance;

            if (winStatus == 1 - chance) {
                setTimeout(() => {
                    alert(`${chance == 0?'o':'x'} won`);
                    resetGame();
                }, 300);
            } else if (turnsPlayed == 9) {
                setTimeout(() => {
                    alert('go for another round --->');
                    resetGame();
                }, 1000);
            }else{
                document.getElementById('currentPlayer').innerText = `${chance == 0 ? 'x' : 'o'}`;
            }

        }
    }

    function checkWin() {
        let win = true;
        for (indexes of winArray) {
            win = true;
            for (index of indexes) {
                if (tile[index] != chance + 1) {
                    win = false;
                    break;
                }
            }
            if (win == true)
                return chance;
        }
        return -1;
    }

    function resetGame() {
        tile = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        chance = 1;
        winStatus = -1;
        for (let id = 1; id <= 9; id++) {
            document.getElementById(`tile${id}`).innerHTML = '<span></span>'
        }
        turnsPlayed=0;
    }

    return gameHandler;

}
let gameHandler = gameHandlerWrapper();
print('start the game');

// window.onload=function(){ setTimeout(function(){ window.scrollTo(0, 1); }, 0); }s


function print(value) {
    console.log(value);
}
