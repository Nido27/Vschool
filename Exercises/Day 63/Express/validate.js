var fnValidate = function (obj) {
    for (key in obj) {
        if (obj[key] === undefined || obj[key] === "") {
            return {
                pass: false,
                message: "enter the " + key
            }
        }
    }
    return {
        pass: true
    }
}

module.exports = fnValidate;