import heroImage from "../assets/hero2.jpeg";

const Hero = () => {
  return (
    <section
      className="relative mt-[58px] min-h-[400px] flex items-center justify-center bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="relative z-10 max-w-xl p-4">
        <div className="hero-text">
          <h1 className="text-4xl font-bold mb-4">Power Your World</h1>
          <p className="text-xl mb-6">
            Explore sustainable power solutions with Kion Electric. Start your
            journey to clean energy today.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
