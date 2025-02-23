import { Task } from "@/models/task";
import { connectToDb } from "@/actions/general";

export async function GET(request) {
  await connectToDb();
  const newTask = new Task({
    name: "API",
    description: "description",
    status: "pending",
  });

  let saved = await newTask.save();
  console.log(saved);
  return Response.json({ message: "Task added", saved: saved });
}
