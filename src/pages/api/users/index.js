import dbConnect from "@/backend/connect";
import User from "@/backend/models/User";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const users = await User.find();
    return response.status(200).json(users);
  }
}
