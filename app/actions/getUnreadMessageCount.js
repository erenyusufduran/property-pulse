"use server";
import connectDb from "../../config/database";
import Message from "../../models/Message";
import { getSessionUser } from "../../utils/getSessionUser";

async function getUnreadMessageCunt() {
  await connectDb();

  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required");
  }

  const { userId } = sessionUser;
  const count = await Message.countDocuments({ recipint: userId, read: false });
  return { count };
}

export default getUnreadMessageCunt;
