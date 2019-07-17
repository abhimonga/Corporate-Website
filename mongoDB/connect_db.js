var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abhinav:rahuljain@56@cluster0-gl1bt.mongodb.net");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});

var Schema = mongoose.Schema;

var bugSchema = new Schema({
    bugName: String,
    bugColour: String,
    Genus: String
});

var Bug = mongoose.model("Bug", bugSchema);

var Bee = new Bug({
    bugName: "Scruffy",
    bugColour: "Orange",
    Genus: "Bombus"
});

Bee.save(function(error) {
    console.log("Your bee has been saved!");
    if (error) {
        console.error(error);
    }
});