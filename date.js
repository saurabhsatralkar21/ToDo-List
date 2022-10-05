
module.exports = "Hello World";

function getDate(){
var today  = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-UK", options);

    return day;
}