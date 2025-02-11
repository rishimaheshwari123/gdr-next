const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        images: [
            {
                public_id: String,
                url: String,
            },
        ],

    },
    { timestamps: true }
);



module.exports = mongoose.model("Product", productSchema); 
