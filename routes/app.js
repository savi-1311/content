const express = require('express');
const creativeModel = require('../models/creativemodel.js');
const blogModel = require('../models/blogmodel.js');
const bookreviewModel = require('../models/bookreviewmodel.js');
const nodemailer = require("nodemailer")
const app = express();
const {GMAIL_PASS} = require('../keys')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'shambhavishandilya01',
      pass: GMAIL_PASS
  }
});

let admin

app.get("/admin", (req, res) => {
  if (!req.session.user) {
    res.status(401).send('login karo')
  } else res.status(200).render("admin",{admin:req.session.user})
});

app.post("/admin",(req,res) => {
	const admin = {
        "userid": req.body.userid,
        "password": req.body.password
    };
    if(admin.userid == "admin" && admin.password == "pass")
    {
		req.session.user = admin
        res.status(200).render('admin',{admin:req.session.user});
	}
	
	
}
)

app.get('/blog', async (req, res) => {
  const blog = await blogModel.find({});

  try {
    res.render('blog',{blog:blog});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/creative-writing', async (req, res) => {
  const creative = await creativeModel.find({});

  try {
    res.render('creative-writing',{creative:creative});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/book-reviews', async (req, res) => {
  const bookreview = await bookreviewModel.find({});

  try {
    res.render('book-reviews',{bookreview:bookreview});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/blog-admin', async (req, res) => {
  const blog = await blogModel.find({});

  try {
    res.render('blog-admin',{blog:blog});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/creative-writing-admin', async (req, res) => {
  const creative = await creativeModel.find({});

  try {
    res.render('creative-writing-admin',{creative:creative});
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/book-reviews-admin', async (req, res) => {
  const bookreview = await bookreviewModel.find({});

  try {
    res.render('book-reviews-admin',{bookreview:bookreview});
  } catch (err) {
    res.status(500).send(err);
  }
});



app.post('/admin/add-blog', async (req, res) => {
	
	if(req.session.user)
	{

    const data2 = {
        "title": req.body.title,
        "content": req.body.content
    };
  const new_blog = new blogModel(data2);

  try {
    await new_blog.save();
const blog = await blogModel.find({});

  try {
	  req.session.user = admin;
    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
  } catch (err) {
    res.status(500).send(err);
  }
}
else
{
	res.status(500).send("yo");
}
});

app.get('/blog-admin/remove-blog/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		blogModel.findOneAndDelete({'title':rem},
  function(err,data){if(!err) console.log(data);});
    res.status(200).end();
	}
else
{
	res.status(500).send("yo");
}
});

app.get('/blog-admin/edit-blog/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		blogModel.findOne({'title':rem},
  function(err,data)
  {
	  if(!err)
	  { 
	  res.render('edit-blog',{blog:data});
	  }});
	}
else
{
	res.status(500).send("yo");
}
});


app.post('/blog-admin/edit-blog/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		var content = req.body.content;
		rem = rem.substring(1);
		console.log(rem);
		console.log(content);
		  blogModel.findOneAndUpdate({ 'title':rem }, { 'content': content }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}
else
{
	res.status(500).send("yo");
}
});



//creative

app.post('/admin/add-creative', async (req, res) => {

if(req.session.user)
{
    const data1 = {
        "title": req.body.title,
        "content": req.body.content
    };
  const new_creative = new creativeModel(data1);

  try {
    await new_creative.save();
const creative = await creativeModel.find({});

  try {
	  req.session.admin = admin;
    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
  } catch (err) {
    res.status(500).send(err);
  }
}
else
{
	res.status(500).send("login karo");
}
});

app.get('/creative-writing-admin/remove-creative/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		creativeModel.findOneAndDelete({'title':rem},
  function(err,data){if(!err) console.log(data);});
    res.status(200).end();
	}
else
{
	res.status(500).send("yo");
}
});

app.get('/creative-writing-admin/edit-creative/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		creativeModel.findOne({'title':rem},
  function(err,data)
  {
	  if(!err)
	  { 
	  res.render('edit-creative',{creative:data});
	  }});
	}
else
{
	res.status(500).send("yo");
}
});


app.post('/creative-writing-admin/edit-creative/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		var content = req.body.content;
		rem = rem.substring(1);
		console.log(rem);
		console.log(content);
		  creativeModel.findOneAndUpdate({ 'title':rem }, { 'content': content }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}
else
{
	res.status(500).send("yo");
}
});


//book-reviews

app.post('/admin/add-book-review', async (req, res) => {

if(req.session.user)
{
	
    const data3 = {
        "title": req.body.title,
        "author": req.body.author,
        "content": req.body.content
    };
  const new_bookreview = new bookreviewModel(data3);

  try {
    await new_bookreview.save();
const bookreview = await bookreviewModel.find({});

  try {
	  req.session.admin = admin;
    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
  } catch (err) {
    res.status(500).send(err);
  }
}
else
{
	res.status(500).send("login karo");
}
});

app.get('/book-reviews-admin/remove-book/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		bookreviewModel.findOneAndDelete({'title':rem},
  function(err,data){if(!err) console.log(data);});
    res.status(200).end();
	}
else
{
	res.status(500).send("yo");
}
});

app.get('/book-reviews-admin/edit-book/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		rem = rem.substring(1);
		console.log(rem);
		bookreviewModel.findOne({'title':rem},
  function(err,data)
  {
	  if(!err)
	  { 
	  res.render('edit-book',{book:data});
	  }});
	}
else
{
	res.status(500).send("yo");
}
});


app.post('/book-reviews-admin/edit-book/:title', (req, res) => {
	
	if(req.session.user)
	{
		var rem = req.params.title;
		var content = req.body.content;
		rem = rem.substring(1);
		console.log(rem);
		console.log(content);
		  creativeModel.findOneAndUpdate({ 'title':rem }, { 'content': content }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}
else
{
	res.status(500).send("yo");
}
});


app.post('/contact',(req,res) =>
{
	const request = {
        "email": req.body.email,
        "phone": req.body.phone,
        "name": req.body.name,
        "comment": req.body.comment
    };
	
	  const mailOptions = {
      from: 'shambhavishandilya01@gmail.com',
      to: 'imt_2019089@iiitm.ac.in',
      subject: 'Request From ' +request.name,
      text: 'Name: '+request.name+'\n'+'Email: '+request.email+'\n'+'Phone Number: '+request.phone+'\n'+'Comment: '+request.comment+'\n'
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
		  res.render("home");
	  }
  });

        
}
);

module.exports = app;
