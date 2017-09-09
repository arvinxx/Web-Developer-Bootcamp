var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name:String,
	age:Number,
	temperament:String
})

var Cat = mongoose.model("Cat",catSchema);

//adding a new cat to the DB

// var Mdelo = new Cat({
// 	name:"Mdelo",
// 	age:14,
// 	temperament:"Gradsaff"
// });

// Mdelo.save(function(err,cat) {
// 	if(err){
// 		console.log("SOMETHING WRONG!");
// 	}
// 	else{
// 		console.log("Work well");
// 		console.log(cat);
// 	}
// });

//retrieve all cats from the DB and console.log each one

Cat.find({},function(err,cats) {
		if(err){
		console.log("SOMETHING WRONG!");
		console.log(err);
	}
		else{
		console.log("All the cats");
		console.log(cats);
	}
})