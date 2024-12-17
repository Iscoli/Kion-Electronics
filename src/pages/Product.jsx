import Button from "../component/ui/Button";

const products = [
  {
    id: 1,
    name: "Solar Generator",
    image: "/src/assets/image1.jpeg",
    description:
      "A high-efficiency solar generator designed for both home and outdoor use. It provides reliable power backup with zero emissions.",
  },
  {
    id: 2,
    name: "Electric Bike Charger",
    image: "/src/assets/image2.jpeg",
    description:
      "An advanced electric bike charger with fast-charging capabilities, designed for durability and convenience.",
  },
  // Add more products
];

export const ProductsPage = () => {
  return (
    <section className="pt-20 py-12  px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg text-gray-600 mt-4">
          Browse through our range of innovative and sustainable products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-4">{product.description}</p>
              <Button
                variant="primary"
                className="mt-6 w-full"
               
              >
                Contact to Buy
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
