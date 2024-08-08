const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "abhi",
    to: "uday",
    msg: "Will you teach me DSA?",
    date: new Date(),
  },
  {
    from: "ram",
    to: "shyam",
    msg: "hello, call me after 1 hour",
    date: new Date(),
  },
  {
    from: "kriti",
    to: "rohan",
    msg: "can you bring plain sheets today",
    date: new Date(),
  },
];
Chat.insertMany(allChats);
