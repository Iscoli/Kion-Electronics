import  Button  from "../component/ui/Button";
import { Bolt, Wrench, Battery } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Bolt className="text-primary w-10 h-10" />,
    title: "Power Station Installation",
    description:
      "Expert installation of solar and hybrid power stations to ensure maximum efficiency.",
  },
  {
    id: 2,
    icon: <Wrench className="text-primary w-10 h-10" />,
    title: "Electric Vehicle Repairs",
    description:
      "Comprehensive maintenance and repair services for electric vehicles and accessories.",
  },
  {
    id: 3,
    icon: <Battery className="text-primary w-10 h-10" />,
    title: "Battery Optimization",
    description:
      "Battery testing and optimization for long-lasting performance.",
  },
];

export const ServicesPage = () => {
  return (
    <section className="py-12  pt-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          World-class services designed to meet your energy and mobility needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button
          variant="primary"
          size="lg"
          onClick={() =>
            window.open("mailto:services@kionelectric.com", "_blank")
          }
        >
          Request Service
        </Button>
      </div>
    </section>
  );
};
