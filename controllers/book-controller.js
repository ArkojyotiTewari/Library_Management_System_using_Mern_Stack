// here we are going to have the routes logic that we had earlier in the routes
// but the architeture tells us to do it in this manner

const {BookModel,UserModel} = require("../models");



// this is one method:

// const getAllBooks = ()=>{};

// const getSingleBookById = () =>{};

// module.exports = {getAllBooks,getSingleBookById}


// to export these apis directly so that all the apis are to be used outside


// while connecting to database we will async and await to get it done in a synchronous way (to load)
exports.getAllBooks = async(req,res)=>{
    // now no json only database
    // to fetch data from database we use await and find to fetch all the records
    const books = await BookModel.find();

    if(books.length===0){
        return res.status(404).json({
            success:false,
            message:"No Book is found"
        })
    }
    return res.status(200).json({
        success:true,
        message:books
    })

};

exports.getSingleBookById = async(req,res) =>{
        // from the req parameters we will get the id

    // curly braces are used to extract specific properties from any object here it is req.params
    // red.params are a built in method to create object of the requests provided hahahahahahahaha
    const {id} = req.params;
    const book = await BookModel.findById(id);
    if(!book){
        return res.status(404).json({
            message:"Book is not found"
        })
    }
    return res.status(200).json({
        success:true,
        data:book
    })

};


exports.addNewBook = async(req,res)=>{
    // id is added by the database
    // all infos in the data
    const {data} = req.body;
    if(!data){
        return res.status(400).json({
            success:false,
            message:"No Data Provided"
        })
    }
    // create is a method to create a new instance
    await BookModel.create(data)
    const allBooks = await BookModel.find();


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
        data:allBooks
    })

}


exports.updateBookById = async(req,res)=>{
    const {id} = req.params;
    const data = req.body;

    
    // const book = books.find((each)=> each.id === id);
    // 1st arguement is the parameter to find the book
    // 2nd arguement is the data which should be updated
    // 3rd is the new data should be true that is it must be saved to the database

    // _id is the keyword for the id provided by the mongo db
    // :id is indicating if the datbase id is matching then do the thing
    
    
    const updatebook = await BookModel.findOneAndUpdate({_id:id},data,{new:true});
    return res.status(200).json({
        success:true,
        data:updatebook
    })

}













exports.deleteBookById = async(req,res)=>{
    const {id} = req.params;
    const books = await BookModel.find();
    const book = books.find((each)=>each.id === id);
    if(!book){
        return res.status(404).json({
            message:"Book is not found"
        })
    }
    const index = books.indexOf(book);
    books.splice(index,1);

    return res.status(200).json({
        success:true,
        data:books
    })

}

// go to mongo db->database->browse collections->test