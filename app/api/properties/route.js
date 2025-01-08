import Property from "../../../models/Property";
import connectDb from "../../../config/database";

export const GET = async () => {
  try {
    await connectDb();
    const properties = await Property.find({});
    return new Response(properties, {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
