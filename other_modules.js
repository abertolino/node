var Tutor = require('./modules.js');

exports.Nodetutorial = function () {
    console.log("Node Tutorial");
    this.pTutor = function () {
        var PTutor = Tutor;
        PTutor.tutorial();
    }
}