import dbConnect from "@/backend/connect";
import User from "@/backend/models/User";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  if (request.method === "GET") {
    const user = await User.findById(id);
    if (!user) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(user);
  }
}
