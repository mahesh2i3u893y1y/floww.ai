const mongoose = require("mongoose")

const connetDb = async () => {
    await mongoose.connect("mongodb+srv://mahesh20:Mahesh2943@projectx.p5ou9.mongodb.net/floww") 
}

module.exports  = {connetDb}