var exports = module.exports = {};

exports.myDateTime = function () {      // exports keyword is used to ensure that the functionality defined in this file can actually be accessed by other files
    return Date();
}

exports.AddNumber = function (a, b) {
    return a + b;
}

exports.tutorial = function () {
    console.log("Guru99 Tutorial");
}