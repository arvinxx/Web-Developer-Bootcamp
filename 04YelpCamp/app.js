var express 	= require("express"),
app 		= express(),
bodyParser 	= require("body-parser"),
mongoose 	= require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
	name:String,
	img:String,
	description:String,
})

var Campground = mongoose.model("Campground",campgroundSchema);

//Creat database

// Campground.create(
// 	{
// 		name:"Wod Waty",
// 		img:"https://c1.staticflickr.com/6/5181/5641024448_04fefbb64d_b.jpg",
// 		description:"This is great one!",
// }
// 	,function(err,campground) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else{
// 			console.log("Add campground successfully!");
// 			console.log(campground);
// 		}
// 	});

// var campgrounds = [
// {name:"Hwaqe Coran",img:"https://c1.staticflickr.com/1/106/316612923_1fc06a0cdf_b.jpg"},
// {name:"Qero Xrat",img:"https://c1.staticflickr.com/1/7/5954480_34a881115f_z.jpg"},
// {name:"Feswq Peeq",img:"https://c1.staticflickr.com/8/7035/6722470843_e4903893af_b.jpg"},
// {name:"Fase Greq",img:"https://c1.staticflickr.com/1/130/321487195_ff34bde2f5_z.jpg"}
// ];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
	res.render("landing");
});

//INDEX --show campgrounds
app.get("/campgrounds",function(req,res) {
	//Get all campgrounds from DB
	Campground.find({},function(err,allCampgrounds) {
		if (err) {
			console.log(err);
		}
		else{
			// console.log(allCampgrounds);
			res.render("campgrounds",{campgrounds: allCampgrounds});
		}
	})
});


app.post("/campgrounds",function(req,res) {
	// get data from form and add to camogrounds array
	var name = req.body.name;
	var img = req.body.img;
	var ddddd = req.body.description;
	var newCampground = {name:name,img:img,description:ddddd};
	//Creat data to database
	Campground.create(newCampground,function(err,newlyCreated) {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Add campground successfully!");
			console.log(newlyCreated);
		}
	});

	// redirect back to campground
	res.redirect("/campgrounds")

});

//CREATE --add new posts
app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

//SHOW --show detail about projects
app.get("/campgrounds/:id",function(req,res){
	//find the campgrounds with provided ID
	Campground.findById(req.params.id,function(err,foundCampground) {
		if (err) {
			console.log(err);
		}
		else{
			res.render("show",{campground:foundCampground});
		}
	});
});

app.listen(3000,function(){
	console.log("Yelp Camp");
})

