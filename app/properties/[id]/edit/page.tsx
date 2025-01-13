import PropertyEditForm from "../../../../components/PropertyEditForm";
import connectDb from "../../../../config/database";
import PropertyAddForm from "../../../../components/PropertyAddForm";
import { convertToSerializableObject } from "../../../../utils/convertToObject";
import Property from "../../../../models/Property";

const PropertyEditPage = async ({ params }) => {
  await connectDb();

  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializableObject(propertyDoc);
  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;