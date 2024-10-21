const mongoose = require("mongoose");
const initData =  require("./data.js");
const Listing = require("../models/listing.js");
const { object } = require("joi");


const MONGO_URL = "mongodb://127.0.0.1:27017/travelCart"

main()
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
});




async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
await Listing.deleteMany({});
initData.data=initData.data.map((obj)=>({...obj, owner: "670aaee9c243aff2736ff50e"}) )
await Listing.insertMany(initData.data);
console.log("data  was initialized");
};
initDB();