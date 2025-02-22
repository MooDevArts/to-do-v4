import mongoose from "mongoose";

async function connectToDb() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "tasks_next", // ✅ Force MongoDB to use "tasks_next"
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connectToDb };
