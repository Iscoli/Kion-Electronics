
import PropTypes from "prop-types";
import { Bolt, Leaf, Users } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      <Icon size={48} className="mx-auto mb-4 text-blue-500" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Add prop type validation
ValueCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const AboutCompany = () => {
  const values = [
    {
      icon: Bolt,
      title: "Innovation",
      description:
        "Continuously pushing the boundaries of electrical technology.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly and renewable energy solutions.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Empowering Nigerian communities through advanced technology.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-10">
          About Kion Electric
        </h2>

        <div className="space-y-6 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Kion Electric is a pioneering Nigerian company dedicated to
            revolutionizing electricity access and sustainable transportation.
            We are committed to bringing innovative power solutions to homes and
            communities, transforming the way people interact with energy.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our core mission is to develop cutting-edge power stations and
            provide expert electric bike repair services. We believe in
            empowering communities through reliable, clean, and efficient energy
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
