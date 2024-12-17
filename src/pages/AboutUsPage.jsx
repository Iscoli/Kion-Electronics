

export const AboutUsPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering the latest in clean energy technology.",
    },
    {
      title: "Sustainability",
      description: "Promoting eco-friendly solutions for a better planet.",
    },
    {
      title: "Customer Focus",
      description: "Delivering exceptional value to our clients.",
    },
  ];

  return (
    <section className="py-12 pt-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Committed to revolutionizing energy solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold">{value.title}</h3>
            <p className="text-gray-600 mt-4">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700">
          At Kion Electric, we believe in delivering excellence through
          innovation and sustainability.
        </p>
      </div>
    </section>
  );
};
