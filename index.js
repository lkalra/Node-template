const express = require("express");
const mongoose = require("mongoose");

const app = express();//HELPS IN CREATING API also known as rest object
const PORT = process.env.PORT || 8000; //backend will give its host in case anything goes wrong 8000 will be used
const URL = "mongodb://localhost:27017/db"; //db in end is database name

function dbconnect() {
    mongoose.connect(URL).then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(err.message);
    });
}
dbconnect();

app.get('/',(req,res)=>{
    res.json({status:'Done'})
})

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});