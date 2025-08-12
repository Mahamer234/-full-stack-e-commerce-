import { useNavigate } from "react-router-dom";
import heroImage from "@assets/e-commerceImage/hero.avif"; // ضع صورة هنا

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative h-[75vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={heroImage}
          alt="Fashion Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-90 "
        />
        {/* content  */}
        <div className="relative z-10 text-center text-white p-8 bg-black bg-opacity-50 rounded-md">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 font-Inter">
            Step into Style
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Trendy fashion for men & women
          </p>
          <button
            onClick={() => navigate("/categories")}
            className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded font-semibold transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
