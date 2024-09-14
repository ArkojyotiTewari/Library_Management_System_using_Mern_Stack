## Rough skeleton of our project

Application ->book record management application

## these are the endpoints or user apis
### user-> /users(they are some end users)
POST: Create a new user
GET: get all the list of users


get the ids of the users
## /users/{id}
GET: get a specific user by the id
PUT: update a user by their id
DELETE: Delete a user by their id
(Check if they have an issued book && is there any
fine amount to be paid)
 User subscription DETAILS -> 3months,6months,12months

 ## /users/subscription-details/{id}
 Get: user subscription details
 >>DAte of subscription
 >>VALID TILL
 >> FINE IF ANY



 ## Books apis

 ## /books
 Get: get all the books
 POST: create/add a new book



<!-- {id} this is due to dynamic nature of the ids only -->
 ## /books/{id}
 GET: get a book by id
 PUT: update a book by its id
 ### /books/issued
 GET: get all issued book

 ### /books/issued/withfine
 GET: get all issued books with fine



 ### Subscription Type:
 >> Basic(3 months)
 >> Standard(6 months)
 >> Premium(12 months)



 ## CODE:
 npm init
 npm i express
 for clients we have other dependencies
 --save-dev is for the developers only so the clients donot need it
 npm i nodemon --save-dev

 npm run dev

 to view we say http://localhost:8081/


 here we will be using the json data and not the database


 ## Using the database
 to store the persistant data that is data is not lost even if we freshly start the servers


 ## MongoDb(This is a free open source)
    Organize the data and when searched I will get the specific query and not the whole data of the file
    Integrity,redundancy,read,update,delete anomalies

    CRUD() assistance of the developer for databaase is the database management system

->Relational and Non Relational
->Normalization concepts
->EF Codd is the father of Normalization


## MongoDb(Non Relational Db)
Deep inside we have ->
Schemulus diagram which are actually json data

It is basically flexible and we will learn how to use it in our project


To connect the MongoDb for the node or the expresss apllication we need a third party app called the mongoose

<!-- command -->
## Just run the command npm i mongoose
## and then go to mongodb website
create a new project and create a m0 cluster and fill the default details and finally go to the driver select node.js and also run the commands and copy the links as well


## donot share this link as if someone gets then khatam tata

mongodb+srv://arkojyotit:U3P5Lv11PN4uuuY4@cluster0.rlojlim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



## there after
go to done and it will be created and in the deployment click on database 
again click on the security where you can have the network change that to global by allowing access from anywhere not only from your IP address
also click on the database access to change the user details


## .env is the environment file 
whatever is stored is changing the environment and then to make the actions occur we will be have to restart the server


## run npm i dotenv to install the package



## now we are going to use the MVC architecture
MVC->Model View Controller Architecture

Controller is the brain or logic of the routes of the endpoints
View is the frontend which is handled with React JS
Model : Structure of the MongoDb database collection basically you can say tables



## React JS
Basically a library
We use this for Frontend
On top of html and css we use React to prettify more
>>SPA->Single Page Application that is as if the application is happening omn a single page only

>>Parent to child component(Data Binding)
>> DOM + Virtual DOM(run before running the main dom to do certain job)
>>Components(Segregate diff parts of the website with different logic)
    >>Class based Components(not very modern)
    >>Functional based Components(more modern and mostly used)
-------legacy.reactjs.org you can refer---------


commands:
npm->node package manager
npx->node package execution
<!-- npx create-react-app app-name
cd app-name
npm start -->