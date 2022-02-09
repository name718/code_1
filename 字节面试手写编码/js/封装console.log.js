var debugge = function() {};
debugge.log = function (message) {
    try {
        console.log("message");
    } catch (e) {
        return;
    }
}
