let state = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];
let zeroPos = { x: 3, y: 3 };

function render(state) {
    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
            $(`#tile${state[i][j]}`).css({ top: 100 * i + "px", left: 100 * j + "px" });
        }
    }
}

function shuffle() {
    for (let i = 0, temp; i < 10; i++) {
        temp = chooseRandom(zeroPos);
        move(zeroPos, temp);
    }
}

function move(init, target) {
    let temp = state[target.x][target.y];
    state[target.x][target.y] = 0;
    state[init.x][init.y] = temp;
    zeroPos = target;
}

function findPos(value) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (state[i][j] == value) return { x: i, y: j };
        }
    }
}

function chooseRandom(zPos) {
    let choices = [];
    if (zPos.x > 0) choices.push({ y: zPos.y, x: zPos.x - 1 });
    if (zPos.x < 3) choices.push({ y: zPos.y, x: zPos.x + 1 });
    if (zPos.y > 0) choices.push({ x: zPos.x, y: zPos.y - 1 });
    if (zPos.y < 3) choices.push({ x: zPos.x, y: zPos.y + 1 });

    return choices[Math.floor(choices.length * Math.random())];

}
init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
  
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
    }
};

function areNeighbors(x, y) {
    if (x.x == y.x && Math.abs(x.y - y.y) == 1) return true;
    else if (x.y == y.y && Math.abs(x.x - y.x) == 1) return true;
    return false;
}
$(function() {
    init();
    $("#shufflebutton").click(() => {
        shuffle();
        render(state);
    });

    $(".puzzlepiece").click(function() {
        let pos = findPos(parseInt($(this).attr("id").substring(4)));
        if (areNeighbors(zeroPos, pos)) {
            move(zeroPos, pos)
            render(state)
        }
    });
    $(".puzzlepiece").hover(function() {
        let pos = findPos(parseInt($(this).attr("id").substring(4)));
        if (areNeighbors(zeroPos, pos)) {
            $(this).toggleClass("movablepiece");
        }
    });
});