
import PropTypes from "prop-types";

const ProductCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Add prop type validation
ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const FeaturedProducts = () => {
  const products = [
    {
      imageSrc: "/src/assets/image1.jpeg",
      title: "Portable Power Station",
      description: "Compact and reliable energy wherever you go.",
    },
    {
      imageSrc: "/src/assets/image2.jpeg",
      title: "Electric Bike Repair",
      description: "Professional repair services for electric bikes.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
