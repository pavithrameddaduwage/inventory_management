const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://pavithra:pavi@cluster0.uo78hct.mongodb.net/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB :", error);
  }
};

module.exports = connectToMongo;
