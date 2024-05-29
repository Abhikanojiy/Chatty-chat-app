const express = require("express");
const connectDB = require("./config/db");
const mongoose=require('mongoose')

const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler }=require("./middlewares/errorMiddleware");

const bodyParser = require("body-parser")
const cors=require('cors')

dotenv.config();
const app = express();
mongoose.connect(process.env.DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, () => {
  console.log('Database connected');
})

app.use(express.json()); // to accept json data
app.use(cors({
  origin: "*",
  credentials: true
}))
// app.get("/", (req, res) => {
//   res.send("API Running!");
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("path");




// // --------------------------deployment------------------------------

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// --------------------------deployment------------------------------





app.use(notFound);
app.use(errorHandler);

const port= process.env.PORT || 5000
const server=app.listen(port,()=>{
    console.log(`started at the port ${port}`)

})


const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
  
    origin:"*",
    methods: ["GET", "POST"],
    transports: ['websocket', 'polling'],
    //credentials: true
    // credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log("Connected to socket.io");
  socket.on('setup', (userData) => {
    socket.join(userData._id);
    // console.log(userData._id);
    socket.emit("connected");
    // console.log(`connected ${userData._id}`);
  });

  socket.on('join chat', (room) => {
    socket.join(room);
    console.log("user room id is " + room);
  
   
  });

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

})