// here we are going to have the routes logic that we had earlier in the routes
// but the architeture tells us to do it in this manner

const {BookModel,UserModel} = require("../models");

// here we are going to have the reference to the book table as well so the foreign key will exist

// this is one method:

// const getAllBooks = ()=>{};

// const getSingleBookById = () =>{};

// module.exports = {getAllBooks,getSingleBookById}


// to export these apis directly so that all the apis are to be used outside


// while connecting to database we will async and await to get it done in a synchronous way (to load)
exports.getAllUsers = async(req,res)=>{
    // now no json only database
    // to fetch data from database we use await and find to fetch all the records
    const users = await UserModel.find();

    if(users.length===0){
        return res.status(404).json({
            success:false,
            message:"No User is found"
        })
    }
    return res.status(200).json({
        success:true,
        data:users
    })

};

exports.getSingleUserById = async(req,res) =>{
        // from the req parameters we will get the id

    // curly braces are used to extract specific properties from any object here it is req.params
    // red.params are a built in method to create object of the requests provided hahahahahahahaha
    const {id} = req.params;
    const user = await UserModel.findById(id);
    if(!user){
        return res.status(404).json({
            message:"User is not found"
        })
    }
    return res.status(200).json({
        success:true,
        data:user
    })

};


exports.addNewUser = async(req,res)=>{
    // id is added by the database
    // all infos in the data
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            success:false,
            message:"No User Data Provided"
        })
    }
    // create is a method to create a new instance
    await UserModel.create(data)
    const allUsers = await UserModel.find();


    // const book = books.find((each)=>each.id === id);
    // if(book){
    //     return res.status(404).json({
    //         success:false,
    //         message: "Book exist with the given id"
    //     })
    // }
    // users.push({id, name,author,genre,price,publisher});
    return res.status(201).json({
        success:true,
        data:allUsers
    })

}


exports.updateUserById = async(req,res)=>{
    const {id} = req.params;
    const data = req.body;
    // const book = books.find((each)=> each.id === id);
    // 1st arguement is the parameter to find the book
    // 2nd arguement is the data which should be updated
    // 3rd is the new data should be true that is it must be saved to the database

    // _id is the keyword for the id provided by the mongo db
    // :id is indicating if the datbase id is matching then do the thing
    const updateUser = await UserModel.findOneAndUpdate({_id:id},data,{new:true});
    return res.status(200).json({
        success:true,
        data:updateUser
    })

}


// this is going to find the user by id and then going to splice the users to find the user with the id
// and then finally it is going to check if the user is present or not
// and finally if the user is present it is going to delete it from the users and going to return the users....................done
exports.deleteUserById = async(req,res)=>{
    const {id} = req.params;
    const users = await UserModel.find();
    const user = users.find((each)=>each.id === id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User is not found"
        })
    }
    const index = users.indexOf(user);
    users.splice(index,1);

    return res.status(200).json({
        success:true,
        data:users
    })

}

// go to mongo db->database->browse collections->test

// but here please remember to get the referential integrity we will be using the id of the database for the issued book
// na hole amra reference hariye felbo