import PropTypes from "prop-types";

const OfferCard = ({ title, description }) => {
  return (
    <div className="bg-blue-600 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const SpecialOffers = () => {
  const offers = [
    {
      title: "10% Off Solar Generators",
      description:
        "For a limited time only, get 10% off our solar generator bundles.",
    },
    {
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $200.",
    },
  ];

  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
