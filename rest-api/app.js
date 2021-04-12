const express= require("express");
const app= express();
require("dotenv").config()
const mongoose= require("mongoose");
const cors= require("cors")
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

const db= mongoose.connection;

db.once("open", ()=>{
    console.log("connected")
})
app.use(express.json())
const commentsWeek1= require("./routes/comments-week-1");
const commentsWeek2= require("./routes/comments-week-2");
const commentsWeek3= require("./routes/comments-week-3");
const usersMovieApp= require("./routes/users");
const logInMovieApp= require("./routes/login")

app.use(cors())
app.use("/comments-week-1", commentsWeek1)
app.use("/comments-week-2", commentsWeek2)
app.use("/comments-week-3", commentsWeek3)
app.use("/users", usersMovieApp)
app.use("/login", logInMovieApp);
//app.use("/comments-week-2")
app.get("/", (req,res)=>{
    res.send("Ola")
})

app.listen(3000)