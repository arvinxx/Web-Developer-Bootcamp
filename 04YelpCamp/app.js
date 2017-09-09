var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var campgrounds = [
{name:"Yeah Fade",img:"https://c1.staticflickr.com/1/112/316612921_f23683ca9d_b.jpg"},
{name:"Wod Waty",img:"https://c1.staticflickr.com/6/5181/5641024448_04fefbb64d_b.jpg"},
{name:"Gedd Tepre",img:"https://c1.staticflickr.com/4/3699/9531093379_89a172dd6c_k.jpg"},
{name:"Hwaqe Coran",img:"https://c1.staticflickr.com/1/106/316612923_1fc06a0cdf_b.jpg"},
{name:"Qero Xrat",img:"https://c1.staticflickr.com/1/7/5954480_34a881115f_z.jpg"},
{name:"Feswq Peeq",img:"https://c1.staticflickr.com/8/7035/6722470843_e4903893af_b.jpg"},
{name:"Fase Greq",img:"https://c1.staticflickr.com/1/130/321487195_ff34bde2f5_z.jpg"}
];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
	res.render("landing");
});

app.get("/campgrounds",function(req,res) {
	res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds",function(req,res) {
	// get data from form and add to camogrounds array
	var name = req.body.name;
	var img = req.body.img;
	var newCampground = {name:name,img:img};
	campgrounds.push(newCampground);

	// redirect back to campground
	res.redirect("/campgrounds")

});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
})

app.listen(3000,function(){
	console.log("Yelp Camp");
})

