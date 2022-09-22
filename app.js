

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var newItems = ["Buy food", "Cook food", "Eat food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//Home route
app.get("/", function(req, res){
   // res.send("Hello");

    var today  = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-UK", options);
    res.render("list", {kindOFDay: day, newListItems: newItems});

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 

//Port route to push new items array
app.post("/", function(req, res){
    var newItem  = req.body.newItem;
    newItems.push(newItem);
    res.redirect("/");
});