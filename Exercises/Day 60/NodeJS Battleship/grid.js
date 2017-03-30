var battleGrid = [];
var viewGrid = []
var grid = function () {
    for (var i = 0; i < 10; i++) {
        battleGrid[i] = [];
        viewGrid[i] = [];
        for (var j = 0; j < 10; j++) {
            battleGrid[i][j] = "-";
            viewGrid[i][j] = "-";
        }
    }
}
grid();
module.exports = {
    battle: battleGrid,
    view: viewGrid
}