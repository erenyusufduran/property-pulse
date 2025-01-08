import PropertyCard from "../../components/PropertyCard";
import connectDb from "../../config/database";
import Property from "../../models/Property";

const PropertiesPage = async () => {
  await connectDb();
  const properties = await Property.find({}).lean()

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
      </div>
    </section>
  );
};

export default PropertiesPage;
