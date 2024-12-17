import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="bg-blue-500 text-white py-16 text-center">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl font-bold mb-6">Stay Powered Up</h2>
        <p className="text-xl mb-8">
          Subscribe to our newsletter and get the latest updates on sustainable
          energy solutions, exclusive offers, and innovative technologies.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-md text-gray-800 w-full sm:flex-grow"
          />
          <button
            type="submit"
            className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <small className="block mt-4 text-sm opacity-75">
          We respect your privacy. Unsubscribe at any time.
        </small>
      </div>
    </section>
  );
};

export default Newsletter;
