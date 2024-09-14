const express = require("express");




// requiring the users
const {users} = require("./data/users.json")


// database connection
const DbConnection = require("./databaseConnection")


// we require this package to connect to the mongodb not the database
const dotenv = require("dotenv");

// importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
// configering to connect with mongodb
dotenv.config();
const app = express();
DbConnection()
const port = 8081;


app.use(express.json());







app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is up and running!"
    })
})

app.use("/users",usersRouter);
app.use("/books",booksRouter);

// haha
app.all("*",(req,res)=>{
    res.status(404).json({
        message: "This route donot exist"
    })
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})


