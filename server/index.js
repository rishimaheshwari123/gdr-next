const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")
const bodyParser = require('body-parser');


// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
cloudinaryConnect();


app.use("/api/v1/contact", require("./routes/contactRoute"))
app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/blog", require("./routes/blogRoute"))
app.use("/api/v1/image", require("./routes/imageRoute"))
app.use("/api/v1/gallery", require("./routes/galleryRoute"))
app.use("/api/v1/product", require("./routes/productROute"))

app.use("/", (req, res) => {
    res.send("Ha bhai chal rha hu. Uski tarha tere ko chod kar thodi jaunga 😀")
})
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
