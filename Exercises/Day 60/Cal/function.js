function addNums(a, b) {
    return a + b;
}


function subNums(a, b) {
    return a - b;
}


function multiNums(a, b) {
    return a * b;
}


function divNums(a, b) {
    return a / b;
}


function expNums(a, b) {
    return Math.pow(a,b)
}

module.exports = {
    add: addNums,
    sub: subNums,
    multi: multiNums,
    div: divNums,
    exp: expNums,
}