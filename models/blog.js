// schemas

const mongoose  = require("mongoose");

let blogSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            trim: true,
            required: true
        },
        author:{
            type: String,
            trim: true, 
            required: true
        },
        comment:{
            type: String,
            trim: true,
            required: true  /*optional*/
        }
    }
)

const BLog = mongoose.model('BLog', blogSchema);  /*model name always start with capital letter and always singular */


module.exports = BLog;
