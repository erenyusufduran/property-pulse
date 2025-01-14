"use server";
import connectDb from "../../config/database";
import User from "../../models/User";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDb();

  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required");
  }

  const { userId } = sessionUser;
  const user = await User.findById(userId);
  let isBookmarked = user.bookmarks.includes(propertyId);
  let message;

  if (isBookmarked) {
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed";
    isBookmarked = false;
  } else {
    user.bookmarks.push(propertyId);
    message = "Bookmark added";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath("/properties/saved", "page");

  return {
    message,
    isBookmarked,
  };
}

export default bookmarkProperty;
