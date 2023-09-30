const mongoose = require("mongoose");
require('dotenv').config()

const dbConnect = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://ansh_c:prajwalchutiyahai@cluster0.znvzn.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
      console.log("Successfully connected to MongoDB Atlas!");
    } catch (error) {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    }
  };

module.exports = dbConnect;