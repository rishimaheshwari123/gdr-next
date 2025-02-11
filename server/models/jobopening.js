const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobOpenSchema = new Schema(
    {
        jobtitle: {
            type: String,
            required: true,
        },

        description:{
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);



module.exports = mongoose.model("jobopening", jobOpenSchema); 
