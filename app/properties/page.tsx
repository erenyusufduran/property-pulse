import PropertyCard from "../../components/PropertyCard";
import Pagination from "../../components/Pagination";
import connectDb from "../../config/database";
import Property from "../../models/Property";
import { convertToSerializableObject } from "../../utils/convertToObject";

const PropertiesPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page || "1", 10);
  const pageSize = parseInt(searchParams.pageSize || "9", 10);
  await connectDb();

  const skip = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const propertiesDocs = await Property.find()
    .skip(skip)
    .limit(pageSize)
    .lean();
  const properties = propertiesDocs.map(convertToSerializableObject);

  const showPagination = total > pageSize;

  return (
    <section className="px-4 py-6">
      <div className="conteiner-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property: { _id: unknown }) => (
              <PropertyCard key={property._id as string} property={property} />
            ))}
          </div>
        )}
        {showPagination && (
          <Pagination page={page} pageSize={pageSize} totalItems={total} />
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
