var first = ["a", "b", "c", "d", "e"];
var second = [1, 2, 3, 4];


if (first.length < second.length){
    var comps = function (first, second) {
    var comp = [];
    for (var i = 0; i < first.length; i++) {
        if (first[i] == undefined) {
            comp.push(second[i])
        } else if (second[i] == undefined) {
            comp.push(first[i])
        } else if (first[i] != undefined) {
            comp.push(first[i], second[i])
        }
    }
    console.log(comp);
}
}else if(first.length > second.length){
    var comps = function (first, second) {
    var comp = [];
    for (var i = 0; i < second.length; i++) {
        if (first[i] == undefined) {
            comp.push(second[i])
        } else if (second[i] == undefined) {
            comp.push(first[i])
        } else if (first[i] != undefined) {
            comp.push(first[i], second[i])
        }
    }
    console.log(comp);
}
}



comps(first, second);