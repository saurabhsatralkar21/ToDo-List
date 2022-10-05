

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var newItems = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Home route
app.get("/", function(req, res){
   // res.send("Hello");

    var day = getDate();
    
    res.render("list", {listTitle: day, newListItems: newItems});

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 

//Port route to push new items array
app.post("/", function(req, res){
    var newItem  = req.body.newItem;
    if(req.body.list === "Work") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
    newItems.push(newItem);
    res.redirect("/");
    }
});

app.get("/work",function(req, res){
    res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.post("/", function(req, res){
    let newItem = req.body.newItem;
    workItems.push(newItem);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});