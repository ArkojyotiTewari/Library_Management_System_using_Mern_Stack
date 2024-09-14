const express = require("express");
const {users} = require("../data/users.json");
const {books} = require("../data/books.json");
// ..models means by default it will be from index.js in models
const {UserModel,BookModel} = require("../models");
const { getAllBooks, getSingleBookById, addNewBook, updateBookById, deleteBookById } = require("../controllers/book-controller");

const router =express.Router();


/**
 * Route: /books
 * Method:GET
 * Description: Get all the books
 * Access: Public
 * Paremetes: None
 */


// here we are creating the apis
// without MVC architecture
// router.get("/",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         data:books
//     })
// }) 

// with the MVC  Model just no logic here bosss logic will be in the controller file hahahaha
router.get("/",getAllBooks);




/**
 * Route: /books/id
 * Method: GET
 * Description: Get books by their id
 * Access: Public
 * Paremetes: Id
 */
// dynamic id that is why we write /:id
// id is in the request
// router.get("/:id",(req,res)=>{ 
//     // from the req parameters we will get the id

//     // curly braces are used to extract specific properties from any object here it is req.params
//     // red.params are a built in method to create object of the requests provided hahahahahahahaha
//     const {id} = req.params;
//     const book = books.find((each)=>each.id ===id);
//     if(!book){
//         return res.status(404).json({
//             message:"Book is not found"
//         })
//     }
//     return res.status(200).json({
//         success:true,
//         data:book
//     })
// })


router.get("/:id",getSingleBookById);

/**
 * Route: /users
 * Method: POST
 * Description: Create a new book
 * Access: Public
 * Paremetes: none
 */

// router.post("/",(req,res)=>{
//     const {id, name,author,genre,price,publisher} = req.body;
//     const book = books.find((each)=>each.id === id);
//     if(book){
//         return res.status(404).json({
//             success:false,
//             message: "Book exist with the given id"
//         })
//     }
//     users.push({id, name,author,genre,price,publisher});
//     return res.status(201).json({
//         success:true,
//         data:books
//     })
// })


router.post("/",addNewBook)


/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by their id
 * Access: Public
 * Paremetes: ID
 */


router.put("/:id",updateBookById);
//     const {id} = req.params;
//     const {data} = req.body;
//     const book = books.find((each)=> each.id === id);
//     if(!book){
//         return res.status(404).json({
//             message:"User is not found"
//         })
//     }
//     const updateBook= books.map((each)=>{
//         if(each.id === id){
//             return{
//                 // whatever data you have in each use it along with the data that is present in the data
//                 ...each,
//                 ...data
//             }
//         }
//         return each;
//     })
//     return res.status(200).json({
//         success:true,
//         data:updateBook
//     })

// })


/**
 * Route: /books/:id
 * Method: DELETE
 * Description: Deleting a book by their id
 * Access: Public
 * Paremetes: ID
 */


router.delete("/:id",deleteBookById)

module.exports = router;

