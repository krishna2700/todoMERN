import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
  const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

  const encodedPassword = encodeURIComponent(MONGODB_PASSWORD);

  const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${encodedPassword}@cluster0.cfjihnr.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with Database", error.message);
  });
};

export default Connection;
