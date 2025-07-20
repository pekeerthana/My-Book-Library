import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import e from "express";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "booknotes",
  password: "postgres",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  const orderby = req.query.sort;
  let data;
  console.log(orderby);
  if(orderby==="rating"){
  data = await db.query("select * from books ORDER BY rating desc");
  } else if(orderby==="title"){
    data = await db.query("select * from books ORDER BY title asc");
  }else{
    data = await db.query("select * from books ORDER BY loggeddate desc");
  }
  const books = data.rows;
  res.render("index.ejs", { books: books ,currentSort: orderby});

});

app.post("/delete", async (req, res) => {
  const data = req.body.id.replace("/", "");
  console.log(data);
  await db.query("delete from books where id = ($1)", [data])
  res.redirect("/")

});


app.get(('/edit/:id'), async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await db.query('select * from books where id = ($1)', [id])
  res.render("edit.ejs", { book: data.rows[0] });

});

app.get(('/book/:id'), async (req, res) => {
  const id = req.params.id;
  const data = await db.query('select * from books where id = ($1)', [id])
  res.render("book.ejs", { book: data.rows[0] });

});

app.post(('/update'), async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const data = await db.query('select * from books where id = ($1)', [id]);
  if (data.rows.length >0) {
    await db.query('update books set title=($1),subtitle=($2),description=($3),rating=($5),loggeddate=($6) where id=($4)', [req.body.title, req.body.subtitle, req.body.description, req.body.id, req.body.rating, req.body.loggeddate]);
    console.log('data updated successfully')
  } else{
      console.log('new book added succssfully!');
      await db.query('insert into books (id,title,subtitle,description,author,rating) values ($1,$2,$3,$4,$5,$6) ',[req.body.id,req.body.title,req.body.subtitle,req.body.description,req.body.author,req.body.rating])
  }
  res.redirect("/");

});

app.get(('/new'), async (req, res) => {
  res.render("new.ejs")
});

app.get('/about',async(req,res)=>{
  res.render('about.ejs');
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



