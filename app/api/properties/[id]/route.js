import Property from "../../../../models/Property";
import connectDb from "../../../../config/database";

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const property = await Property.findById(params.id);
    if (!property) return new Response("Property not found", { status: 404 });
    return new Response(property, {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
