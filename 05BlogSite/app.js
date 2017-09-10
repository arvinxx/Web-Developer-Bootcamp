var express 	= require("express"),
app 		= express(),
methodOverride  = require("method-override");
bodyParser 	= require("body-parser"),
mongoose 	= require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({

	title:String,
	image:String,
	body:String,
	created:{type:Date,default:Date.now}

})
var Blog = mongoose.model("Blog",blogSchema);

// Blog.create({
// 	title:"testBlog",
// 	image:"https://images.unsplash.com/photo-1504855328839-2f4baf9e0fd7?dpr=2&auto=format&fit=crop&w=1080&h=1381&q=80&cs=tinysrgb&crop=",
// 	body:"Hello,THis is text Body!",
// });

//RESTful ROUTES

//INDEX ROUTES
app.get("/",function(req,res){
	res.redirect("/blogs");
})

app.get("/blogs",function(req,res) {
	Blog.find({},function(err,blogs){
		if(err){
			console.log("Err");	
		}
		else{
			console.log(blogs);
			res.render("index",{blogs:blogs});
		}
	});
})


//NEW ROUTE
app.get("/blogs/new",function(req,res){
	res.render("new");
});

//CREATE ROUTE
app.post("/blogs",function(req,res) {
	Blog.create(req.body.blog,function(err,newBlog){
		if(err){
			console.log("Err");	
			res.render("new");
		}
		else{
			res.redirect("/blogs");
		}
	})
});

//SHOW ROUTE
app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			console.log(foundBlog)
			res.render("show",{blog:foundBlog});
		}	
	})
});

//EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			console.log(foundBlog)
			res.render("edit",{blog:foundBlog});
		}	
	})
});


//UPDATE ROUTE
app.put("/blogs/:id",function(req,res) {
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updateBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			console.log(updateBlog)
			res.redirect("/blogs/" + req.params.id);
		}	
	})
});


//DELETE ROUTE
app.delete("/blogs/:id",function(req,res) {
	Blog.findByIdAndRemove(req.params.id,function(err,deleteBlog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			console.log(deleteBlog)
			res.redirect("/blogs");
		}	
	})
})



app.listen(3000,function(){
	console.log("RESTful Blog is Running!");
});
