import  Button  from "../component/ui/Button";

const faqs = [
  {
    question: "How do I order a product?",
    answer:
      "Contact us at info@kionelectric.com or use the 'Contact to Buy' button on the Products page.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our support team is available from 9 AM to 6 PM, Monday to Friday.",
  },
];

export const SupportPage = () => {
  return (
    <section className="py-12 pt-20 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Support</h1>
        <p className="text-lg text-gray-600 mt-4">
          We&apos;re here to assist you with any questions or issues.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows="4"
            required
          ></textarea>
          <Button
            type="submit"
            variant="primary"
            onClick={() => alert("Message sent successfully!")}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
