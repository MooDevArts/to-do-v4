import { Task } from "@/models/task";
import { connectToDb } from "@/actions/general";
import clientPromise from "@/lib/mongodb";

async function addTask(name, description) {
  await connectToDb();
  const newTask = new Task({
    name: name,
    description: description,
    status: "pending",
  });

  let saved = await newTask.save();
  console.log(saved);
}

async function addTaskv2(name, description) {
  const body = {
    name: name,
    description: description,
    status: "pending",
  };
  const client = await clientPromise;
  const db = client.db("tasks_next");
  const collection = db.collection("tasks");
  const result = await collection.insertOne(body);
}

export { addTask, addTaskv2 };
