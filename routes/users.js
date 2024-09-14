// these are for the APIs

const express = require("express");
const {users} = require("../data/users.json");

// ..models means by default it will be from index.js in models
const {UserModel,BookModel} = require("../models");
const { getAllUsers, getSingleUserById, addNewUser, updateUserById, deleteUserById } = require("../controllers/user-controller");

const router = express.Router();


/**
 * Route: /users
 * Method:GET
 * Description: Get all the users
 * Access: Public
 * Paremetes: None
 */


// here we are creating the apis
router.get("/",getAllUsers)



/**
 * Route: /users
 * Method: GET
 * Description: Get users by their id
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
//     const user = users.find((each)=>each.id ===id);
//     if(!user){
//         return res.status(404).json({
//             message:"User is not found"
//         })
//     }
//     return res.status(200).json({
//         success:true,
//         data:user
//     })
// })


router.get("/:id",getSingleUserById)

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Paremetes: none
 */

// router.post("/",(req,res)=>{
//     const {id, name,surname,email,subscriptionType,subscriptionDate} = req.body;
//     const user = users.find((each)=>each.id === id);
//     if(user){
//         return res.status(404).json({
//             success:false,
//             message: "User exist with the given id"
//         })
//     }
//     users.push({id, name,surname,email,subscriptionType,subscriptionDate});
//     return res.status(201).json({
//         success:true,
//         data:users
//     })
// })


router.post("/",addNewUser)


/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by their id
 * Access: Public
 * Paremetes: ID
 */


// router.put("/:id",(req,res)=>{
//     const {id} = req.params;
//     const {data} = req.body;
//     const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             message:"User is not found"
//         })
//     }
//     const updateUser = users.map((each)=>{
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
//         data:updateUser
//     })

// })



router.put("/:id",updateUserById)

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Deleting a user by their id
 * Access: Public
 * Paremetes: ID
 */


// router.delete("/:id",(req,res)=>{
//     const {id} = req.params;
//     const user = users.find((each)=>each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User is not found"
//         })
//     }
//     const index = users.indexOf(user);
//     users.splice(index,1);

//     return res.status(200).json({
//         success:true,
//         data:users
//     })

// })


router.delete("/:id",deleteUserById)


// this we are exporting as the router is being used by index.js
module.exports = router;